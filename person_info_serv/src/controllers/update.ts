import { NextFunction, Request, Response } from 'express';
import { UpdatePerson } from '../business/update';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { IPersonParams } from '../interfaces/IPerson';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { update_body_schema, update_path_schema } from '../schemas/person';


export async function updateController(req: Request, res: Response, next: NextFunction) {
  try {    
    const path = schemaValidator<IPersonParams>(req.params as unknown as IPersonParams, update_path_schema);
    const body = schemaValidator<IPersonParams>(req.body as unknown as IPersonParams, update_body_schema);

    const update = new UpdatePerson();

    await update.update({...path, ...body});

    return res.status(HTTP_STATUS_CODE.NO_CONTENT).send()
  } catch (error) {
    logger.error('[GET_BY_NAME]', error.message)
    next(error);
  }
}