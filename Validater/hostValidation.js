"use strict";

const Joi = require('joi');
const record = req.body;

const schema = Joi.object({
    password: Joi.string()
            .token()
            .lowercase()
            .required(),


    
    hostname: Joi.string()
                .required()


})

try{
    const value = await schema.validateAsync(record);
}catch(errors){
    res.sendStatus(400);
}