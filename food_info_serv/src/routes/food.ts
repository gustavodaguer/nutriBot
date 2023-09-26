import { Router } from "express";
import { createController } from '../controllers/create';
import { deleteController } from "../controllers/delete";
import { getController } from "../controllers/get";
import { getByNameController } from "../controllers/getByName";
import { updateController } from "../controllers/update";
import error_middleware from '../middlewares/error';

const foods_routes = Router();

foods_routes.post('/', createController, error_middleware);
foods_routes.get('/',getController, error_middleware)
foods_routes.get('/:name',getByNameController, error_middleware)
foods_routes.put('/:name', updateController, error_middleware)
foods_routes.delete('/:name', deleteController, error_middleware)

export { foods_routes };
