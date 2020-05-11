const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);

routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    cpf: Joi.string().required(),
    cep: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required().length(2),
    neighborhood: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.string().required(),
    password: Joi.string().required(),
  })
}), UserController.create);

module.exports = routes;