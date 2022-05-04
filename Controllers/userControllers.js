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
    const {username , password} = req.body; ; 
  if(!host){
    return res.redirect('/userlogin');
  }
  const check1 = await argon2.verify(user.hash, password); 

  if(check1 === true){
    if(req.session.regenerate()){
        res.redirect('/userRegister');
    }else{
        res.redirect('/userlogin');
      }
    }else{
    res.redirect('/userlogin');
    }
  req.session.regenerate( (err) => {
    if(err){
        console.error(err);
        return res.sendStatus(500);
      }
    req.session.isLoggedIn = true; 
    req.session.user = {
      "username": user.username,
      "userID" : user.userID,
    }; 
    return res.sendStatus(200); 
    }); 

}

async function createNewuser(req,res){
    const {username , password} = req.body; 
  const check = await userModel.addUser(username, password); 

  if(!check){
      return res.redirect('/userlogin');
  }else{
      return res.redirect('/userRegister');
  }
}

module.exports = {
    userTimeAvailable,
    userlogin,
    createNewuser,
}
