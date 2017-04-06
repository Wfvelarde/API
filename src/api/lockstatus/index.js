import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Lockstatus, { schema } from './model'

const router = new Router()
const { status } = schema.tree

/**
 * @api {post} /lockstatuses Create lockstatus
 * @apiName CreateLockstatus
 * @apiGroup Lockstatus
 * @apiParam status Lockstatus's status.
 * @apiSuccess {Object} lockstatus Lockstatus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lockstatus not found.
 */
router.post('/',
  body({ status }),
  create)

/**
 * @api {get} /lockstatuses Retrieve lockstatuses
 * @apiName RetrieveLockstatuses
 * @apiGroup Lockstatus
 * @apiUse listParams
 * @apiSuccess {Object[]} lockstatuses List of lockstatuses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /lockstatuses/:id Retrieve lockstatus
 * @apiName RetrieveLockstatus
 * @apiGroup Lockstatus
 * @apiSuccess {Object} lockstatus Lockstatus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lockstatus not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /lockstatuses/:id Update lockstatus
 * @apiName UpdateLockstatus
 * @apiGroup Lockstatus
 * @apiParam status Lockstatus's status.
 * @apiSuccess {Object} lockstatus Lockstatus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lockstatus not found.
 */
router.put('/:id',
  body({ status }),
  update)

/**
 * @api {delete} /lockstatuses/:id Delete lockstatus
 * @apiName DeleteLockstatus
 * @apiGroup Lockstatus
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lockstatus not found.
 */
router.delete('/:id',
  destroy)

export default router
