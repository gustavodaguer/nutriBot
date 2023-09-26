import { NextFunction, Request, Response } from 'express';
import { GetFoods } from '../business/getFoods';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { logger } from '../libs/logger';


export async function getController(req: Request, res: Response, next: NextFunction) {
  try {    
    const getBusiness = new GetFoods();

    const response = await getBusiness.getAll();

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    logger.error('[GET]', error.message)
    next(error);
  }
}