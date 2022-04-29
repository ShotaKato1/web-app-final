"use strict";

const argon2 = require("argon2"); 
const { sendStatus, send } = require("express/lib/response");
const hostModel = require("../Models/hostModel");
const nodemailer = require("nodemailer");

async function createNewHost(req,res){
  const host = req.body; 
  const check = await hostModel.addHost(host); 

  if(!check){
      return res.redirect('/login');
  }else{
      return res.redirect('/hostRegister');
  }
}

async function login (req,res){
  const host = req.body; ; 
  if(!host){
    return res.redirect('/login');
  }
  const check1 = await argon2.verify(host.hash, password); 

  if(check1 === true){
    if(req.session.regenerate()){
        res.redirect('/userRegister');
        sendEmail(); 
    }else{
        res.redirect('/login');
      }
    }else{
    res.redirect('/login');
    }
  req.session.regenerate( (err) => {
    if(err){
        console.error(err);
        return res.sendStatus(500);
      }
    req.session.isLoggedIn = true; 
    req.session.host = {
      "username": host.hostname,
      "hostID" : host.hostID,
    }; 
    return res.sendStatus(200); 
    }); 

}
