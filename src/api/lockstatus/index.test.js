import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Lockstatus } from '.'

const app = () => express(routes)

let lockstatus

beforeEach(async () => {
  lockstatus = await Lockstatus.create({})
})

test('POST /lockstatuses 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ status: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.status).toEqual('test')
})

test('GET /lockstatuses 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /lockstatuses/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${lockstatus.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(lockstatus.id)
})

test('GET /lockstatuses/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /lockstatuses/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${lockstatus.id}`)
    .send({ status: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(lockstatus.id)
  expect(body.status).toEqual('test')
})

test('PUT /lockstatuses/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ status: 'test' })
  expect(status).toBe(404)
})

test('DELETE /lockstatuses/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${lockstatus.id}`)
  expect(status).toBe(204)
})

test('DELETE /lockstatuses/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
