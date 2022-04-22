"use strict";
const { sendStatus, send } = require("express/lib/response");

async function userTimeAvailable(req, res){
    const obj = req.body;

    if(UserModel.checktime(obj)){
        res.send("You complete the working!");
    }else{
        res.redirect('/timeAvailable');
    }

    return await obj;
}

async function userlogin (req,res){
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

async function createNewuser(req,res){
    const obj = req.body; 
    

    if(hostModel.addHost(obj)){
        res.redirect('/userlogin');
    }else{
        res.redirect('/userRegester');
    }

    return await obj;
}

module.exports = {
    userTimeAvailable,
    userlogin,
    createNewuser,
}