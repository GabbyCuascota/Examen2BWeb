import * as Joi from 'joi';

export const EQUIPOFUTBOL_SCHEMA = Joi.object().keys({
  equiposFutbolId: Joi.number().required(),
  nombre: Joi.string().alphanum().min(3).max(30).required(),
  liga: Joi.string().alphanum().min(5).max(30).required(),
  fechaCreacion: Joi.date().max('03-06-2012').required(),
  numeroCopasInternacionales: Joi.number().required(),
  campeonActual: Joi.boolean().required(),
});
