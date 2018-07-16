import * as Joi from 'joi';

export const JUGADOR_SCHEMA = Joi.object().keys({
  numeroCamiseta: Joi.number().required(),
  nombreCamiseta: Joi.string().alphanum().min(5).max(30).required(),
  nombreCompletoJugador: Joi.string().alphanum().min(10).max(60).required(),
  poderEspecialDos: Joi.string().alphanum().min(10).max(60).required(),
  fechaIngresoEquipo: Joi.date().max('03-06-2018').required(),
  goles: Joi.number().required(),
  equipoFutbolId: Joi.number().required(),
});
