"use strict";
const { sendStatus, send } = require("express/lib/response");

const hostModel = require("../Models/hostModel");

async function createNewHost(req,res){
    const obj = req.body; 
    

    if(hostModel.addHost(obj)){
        res.redirect('/login');
    }else{
        res.redirect('/hostRegester');
    }

    return await obj;
}

async function login (req,res){
    host = req.body;
    if(!host){
        res.redirect('/login');
    }
    const check = await argon2.verify(host);
    if(check === true){
        if(req.session.regenerate()){
            res.redirect('/userRegister');
        }else{
            res.redirect('/login');
        }
    }else{
        res.redirect('/login');
    }
}

module.exports = {
    login,
    createNewHost,
};