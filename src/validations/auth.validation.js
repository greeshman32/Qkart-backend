const Joi = require("joi");
const { password } = require("./custom.validation");

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 * - "name": string
 */
const register = {
    body:{
      email: Joi.string().email().required(),
      password:Joi.custom(password).required(),
      name: Joi.string().required()
    }
};

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 */
const login = {
  body:{
    email:Joi.string().email().required(),
    password:Joi.custom(password).required()
  }
};

module.exports = {
  register,
  login,
};
