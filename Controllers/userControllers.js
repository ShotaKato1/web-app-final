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

module.exports = {
    userTimeAvailable,
}