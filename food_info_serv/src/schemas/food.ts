import * as Joi from 'joi';

const name = Joi.string().trim().max(100).required();
const quantity = Joi.number().min(0);
const unity =  Joi.string().trim().max(10)
const details = Joi.object()

export const create_schema = Joi.object().keys({name,quantity: quantity.required(),unity: unity.required(), details})
export const get_by_name_schema = Joi.object().keys({name})
export const update_body_schema = Joi.object().keys({quantity,unity, details})
export const update_path_schema = Joi.object().keys({name})
export const delete_path_schema = Joi.object().keys({name})