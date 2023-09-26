import { NextFunction, Request, Response } from 'express';
import { CreatePerson } from '../business/create';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { RESPONSE_MESSAGES } from '../constants/responseMessages';
import { IPerson } from '../interfaces/IPerson';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { create_schema } from '../schemas/person';


export async function createController(req: Request, res: Response, next: NextFunction) {
  try {
    const body = schemaValidator<IPerson>(req.body, create_schema);
    
    const createPersonBusiness = new CreatePerson();

    await createPersonBusiness.create(body);

    return res.status(HTTP_STATUS_CODE.CREATED).json(RESPONSE_MESSAGES.CREATED)
  } catch (error) {
    logger.error('[CREATE]', error.message)
    next(error);
  }
}