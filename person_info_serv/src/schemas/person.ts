import * as Joi from 'joi';

const _id = Joi.string().trim();
const first_name = Joi.string().trim().max(40);
const middle_name = Joi.string().trim().max(80);
const last_name = Joi.string().trim().max(40);
const birth_date = Joi.string().regex(/\d{4}-\d{2}-\d{2}/);
const weight = Joi.number().positive();
const height = Joi.number().positive();
const objective = Joi.string().max(200);

export const create_schema = Joi.object().keys({
  first_name: first_name.required(),
  last_name: last_name.required(),
  birth_date: birth_date.required(),
  weight: weight.required(),
  height: height.required(),
  middle_name,
  objective,
});
export const get_by_id_schema = Joi.object().keys({ _id });
export const update_body_schema = Joi.object().keys({
  first_name,
  last_name,
  birth_date,
  weight,
  height,
  middle_name,
  objective,
});
export const update_path_schema = Joi.object().keys({ _id });
export const delete_path_schema = Joi.object().keys({ _id });
