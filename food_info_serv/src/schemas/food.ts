import * as Joi from 'joi';

const name = Joi.string().trim().max(100).required();
const details = Joi.object()

export const create_schema = Joi.object().keys({name,details})
export const get_by_name_schema = Joi.object().keys({name})
export const update_body_schema = Joi.object().keys({details})
export const update_path_schema = Joi.object().keys({name})
export const delete_path_schema = Joi.object().keys({name})