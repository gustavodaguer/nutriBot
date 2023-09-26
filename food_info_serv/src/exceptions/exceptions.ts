import { HTTP_STATUS_CODE } from "../constants/httpStatusCode";
import { IError } from "../interfaces/IError";

export class FoodError extends Error {
  public status: number;
  public code: string;
  public response: IError;

  constructor(error: IError, name: string, status: number) {
    super(`${name}: ${error.message}`)
    this.message = error.message;
    this.code = error.code;
    this.status = status;
    this.name = name;
    this.response = error;
  }
}

export class BadRequestError extends FoodError {
  constructor(error_message: IError) {
    super(error_message, 'BadRequestError', HTTP_STATUS_CODE.BAD_REQUEST)
  }
}

export class NotFoundError extends FoodError {
  constructor(error_message: IError) {
    super(error_message, 'BadRequestError', HTTP_STATUS_CODE.NOT_FOUND)
  }
}

export class InternalServerError extends FoodError {
  constructor(error_message: IError) {
    super(error_message, 'InternalServerError', HTTP_STATUS_CODE.INTERNAL_SERVER);
  }
}
