"use strict";

const Joi = require('joi');

const {makeBodyValidator} = require("./makeValidation");

const userSchema = Joi.object({
    "username": Joi.string()
        .token()
        .lowercase()
        .required()
}); 

const userValidation = makeBodyValidator(userSchema);

module.exports = {
    userValidation,
}; 
