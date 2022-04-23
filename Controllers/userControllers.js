"use strict";

const argon2 = require("argon2"); 
const { sendStatus, send } = require("express/lib/response");
const hostModel = require("../Models/hostModel");
const nodemailer = require("nodemailer");

function createNewHost(req,res){
  const {username , password} = req.body; 
  const check = await hostModel.addHost(username, password); 

  if(!check){
      return res.redirect('/hostlogin');
  }else{
      return res.redirect('/hostRegister');
  }
}

async function login (req,res){
  const {username , password} = req.body; ; 
  if(!host){
    return res.redirect('/hostlogin');
  }
  const check1 = await argon2.verify(host.hash, password); 

  if(check1 === true){
    if(req.session.regenerate()){
        res.redirect('/hostRegister');
    }else{
        res.redirect('/hostlogin');
      }
    }else{
    res.redirect('/hostlogin');
    }
  req.session.regenerate( (err) => {
    if(err){
        console.error(err);
        return res.sendStatus(500);
      }
    req.session.isLoggedIn = true; 
    req.session.host = {
      "hostname": host.hostname,
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

function sendEmail (username, subject, text, html) {
  const message = {
    from: process.env.EMAIL_ADDRESS,
    to: username,
    subject: subject,
    text: text,
    html: html
  };
  try {
    await transporter.sendMail(message);
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
