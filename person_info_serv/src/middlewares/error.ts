/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { PersonError } from '../exceptions/exceptions';
import { logger } from '../libs/logger';

export default (error: Error, __: Request, res: Response, _: NextFunction) => {;
  logger.error(`${error.name}: ${error.message}`)
  if (!(error instanceof PersonError)) {
    return res.status(500).json(ERROR_MESSAGES.INTERNAL_SERVER);
  }

  const known_error = error as unknown as PersonError;
  res.status(known_error.status).json(known_error.response)
}