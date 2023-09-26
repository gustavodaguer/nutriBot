import { NextFunction, Request, Response } from 'express';
import { DeletePerson } from '../business/delete';
import { HTTP_STATUS_CODE } from '../constants/httpStatusCode';
import { IPersonParams } from '../interfaces/IPerson';
import { schemaValidator } from '../libs/joiValidator';
import { logger } from '../libs/logger';
import { delete_path_schema } from '../schemas/person';


export async function deleteController(req: Request, res: Response, next: NextFunction) {
  try {    
    const path = schemaValidator<IPersonParams>(req.params as unknown as IPersonParams, delete_path_schema);

    const deleteBusiness = new DeletePerson();

    await deleteBusiness.delete(path);

    return res.status(HTTP_STATUS_CODE.NO_CONTENT).json()
  } catch (error) {
    logger.error('[DELETE]', error.message)
    next(error);
  }
}