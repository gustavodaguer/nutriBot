import { NextFunction, Request, Response } from 'express';
import { GetPersons } from '../business/get';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { IPersonParams } from '../interfaces/IPerson';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { get_by_id_schema } from '../schemas/person';


export async function getByIdController(req: Request, res: Response, next: NextFunction) {
  try {    
    const path = schemaValidator<IPersonParams>(req.params as unknown as IPersonParams, get_by_id_schema);

    const getBusiness = new GetPersons();

    const response = await getBusiness.getById(path);

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    logger.error('[GET_BY_NAME]', error.message)
    next(error);
  }
}