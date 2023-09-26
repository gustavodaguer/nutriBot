import { Router } from "express";
import { createController } from '../controllers/create';
import { deleteController } from "../controllers/delete";
import { getController } from "../controllers/get";
import { getByIdController } from "../controllers/getById";
import { updateController } from "../controllers/update";
import error_middleware from '../middlewares/error';

const persons_routes = Router();

persons_routes.post('/', createController, error_middleware);
persons_routes.get('/',getController, error_middleware)
persons_routes.get('/:_id',getByIdController, error_middleware)
persons_routes.put('/:_id', updateController, error_middleware)
persons_routes.delete('/:_id', deleteController, error_middleware)

export { persons_routes };
