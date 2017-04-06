import { Lockstatus } from '.'

let lockstatus

beforeEach(async () => {
  lockstatus = await Lockstatus.create({ status: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = lockstatus.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(lockstatus.id)
    expect(view.status).toBe(lockstatus.status)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = lockstatus.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(lockstatus.id)
    expect(view.status).toBe(lockstatus.status)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
