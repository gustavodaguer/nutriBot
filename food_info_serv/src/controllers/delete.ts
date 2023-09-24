import { NextFunction, Request, Response } from 'express';
import { DeleteFood } from '../business/deleteFood';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { IFoodParams } from '../interfaces/IFood';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { delete_path_schema } from '../schemas/food';


export async function deleteController(req: Request, res: Response, next: NextFunction) {
  try {    
    const path = schemaValidator<IFoodParams>(req.params as unknown as IFoodParams, delete_path_schema);

    const deleteBusiness = new DeleteFood();

    await deleteBusiness.delete(path);

    return res.status(HTTP_STATUS_CODE.NO_CONTENT).json()
  } catch (error) {
    logger.error('[DELETE]', error.message)
    next(error);
  }
}