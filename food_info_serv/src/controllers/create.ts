import { NextFunction, Request, Response } from 'express';
import { CreateFood } from '../business/createFood';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { RESPONSE_MESSAGES } from '../constants/responseMessages';
import { IFood } from '../interfaces/IFood';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { create_schema } from '../schemas/food';


export async function createController(req: Request, res: Response, next: NextFunction) {
  try {
    const body = schemaValidator<IFood>(req.body, create_schema);
    
    const createFoodBusiness = new CreateFood();

    await createFoodBusiness.create(body);

    return res.status(HTTP_STATUS_CODE.CREATED).json(RESPONSE_MESSAGES.CREATED)
  } catch (error) {
    logger.error('[CREATE]', error.message)
    next(error);
  }
}