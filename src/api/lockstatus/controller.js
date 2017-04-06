import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Lockstatus } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Lockstatus.create(body)
    .then((lockstatus) => lockstatus.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Lockstatus.find(query, select, cursor)
    .then((lockstatuses) => lockstatuses.map((lockstatus) => lockstatus.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Lockstatus.findById(params.id)
    .then(notFound(res))
    .then((lockstatus) => lockstatus ? lockstatus.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Lockstatus.findById(params.id)
    .then(notFound(res))
    .then((lockstatus) => lockstatus ? _.merge(lockstatus, body).save() : null)
    .then((lockstatus) => lockstatus ? lockstatus.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Lockstatus.findById(params.id)
    .then(notFound(res))
    .then((lockstatus) => lockstatus ? lockstatus.remove() : null)
    .then(success(res, 204))
    .catch(next)
