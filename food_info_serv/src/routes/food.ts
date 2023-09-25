import { Router } from "express";
import { createController } from '../controllers/create';
import { getController } from "../controllers/get";

import { deleteController } from "../controllers/delete";
import { getByNameController } from "../controllers/getByName";
import { updateController } from "../controllers/update";
import error_middleware from '../middlewares/error';


const router = Router();

export function foodRoutes(app: typeof router) {
  app.use('/food', router)
  app.post('/', createController, error_middleware)
  app.get('/',getController, error_middleware)
  app.get('/:name',getByNameController, error_middleware)
  app.put('/:name', updateController, error_middleware)
  app.delete('/:name', deleteController, error_middleware)
}
