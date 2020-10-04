import { Router } from 'express';
import controllers from './user.controllers';

/*
 * Defines the endpoints for the User entity that are
 * basically the CRUD ones
 */
const router = Router();

router
  .route('/') // => entity endpoint /api/v1/user
  .get(controllers.fetchAll) // => GET /api/v1/user
  .post(controllers.create); // => POST /api/v1/user

router
  .route('/:id') // => singleton endpoint /api/v1/user/:id
  .get(controllers.fetchById) // => GET /api/v1/user/:id
  .put(controllers.update) // => PUT /api/v1/user/:id
  .delete(controllers.remove); // => DELETE /api/v1/user/:id

export default router;
