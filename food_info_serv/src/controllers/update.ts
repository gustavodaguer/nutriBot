import { NextFunction, Request, Response } from 'express';
import { UpdateFood } from '../business/updateFood';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { IFoodParams } from '../interfaces/IFood';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { update_body_schema, update_path_schema } from '../schemas/food';


export async function updateController(req: Request, res: Response, next: NextFunction) {
  try {    
    const path = schemaValidator<IFoodParams>(req.params as unknown as IFoodParams, update_path_schema);
    const body = schemaValidator<IFoodParams>(req.body as unknown as IFoodParams, update_body_schema);

    const update = new UpdateFood();

    await update.update({...path, ...body});

    return res.status(HTTP_STATUS_CODE.NO_CONTENT).send()
  } catch (error) {
    logger.error('[GET_BY_NAME]', error.message)
    next(error);
  }
}