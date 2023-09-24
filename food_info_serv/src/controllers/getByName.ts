import { NextFunction, Request, Response } from 'express';
import { GetFoods } from '../business/getFoods';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { IFoodParams } from '../interfaces/IFood';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { get_by_name_schema } from '../schemas/food';


export async function getController(req: Request, res: Response, next: NextFunction) {
  try {    
    const path = schemaValidator<IFoodParams>(req.params as unknown as IFoodParams, get_by_name_schema);

    const getBusiness = new GetFoods();

    const response = await getBusiness.getByName(path);

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    logger.error('[GET_BY_NAME]', error.message)
    next(error);
  }
}