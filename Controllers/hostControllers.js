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

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

async function sendEmail (username, subject, text, html) {
  const message = {
    from: process.env.EMAIL_ADDRESS,
    to: username,
    subject: subject,
    text: text,
    html: html
  };
  try {
    transporter.sendMail(message);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
 }

const text = (
  "Thank you joing scheduling meetings!\n\n"
);
 
const html = (
  "<h1 style=\"margin-bottom: 1rem;\">Thank you for joining our scheduling meetings!</h1>" 
);
 
function sendSchedulingWelcome (to) {
  const emailSent = sendEmail(to, "Welcome to Our Scheduling Meetings", text, html);
  if (emailSent) {
    res.redirect('/timeAvailable');
  } else {
    res.redirect('/login');
  }
}

module.exports = {
    login,
    createNewHost,
    sendEmail,
    sendSchedulingWelcome ,
};
