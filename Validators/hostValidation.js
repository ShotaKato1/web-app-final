"use strict";

const Joi = require('joi');

const {makeBodyValidator} = require("./makeValidation");

const hostSchema = Joi.object({
    "password": Joi.string()
            .token()
            .lowercase()
            .required(),


    
    "hostname": Joi.string()
                .required()


});

const hostValidation = makeBodyValidator(hostSchema);

module.exports={
    hostValidation,
};

