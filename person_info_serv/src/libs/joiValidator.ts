import * as Joi from 'joi';
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { BadRequestError } from "../exceptions/exceptions";

export function schemaValidator<T>(body: T, schema: Joi.AnySchema<T>) {
  const { value, error } = schema.validate(body);

  if (error) {
    let error_message;
    try {
      const path = error.details[0].path.join('.');
      error_message = `[${path}] ${error.details[0].message}`;
    } catch {
      error_message = error.message;
    }
    

    throw new BadRequestError({...ERROR_MESSAGES.INVALID_DATA, message: error_message});
  }

  return value;
}