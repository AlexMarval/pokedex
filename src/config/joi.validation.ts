import * as Joi from 'joi';

export const JoiValidationShema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(15),
  DEFAULT_LIMIT: Joi.number().default(3001),
});
