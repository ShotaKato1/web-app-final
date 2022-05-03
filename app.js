"use strict";

const dotenv = require("dotenv").config()
//require("dotenv").config();

const express = require("express");
const app = express();

//Session Management 
const redis = require('redis');
const session = require('express-session');
 
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();
 
const sessionConfig = {
  store: new RedisStore({ client: redisClient }),
  secret: process.env.COOKIE_SECRET, 
  resave: false,
  saveUninitialized: false,
  name: "session", // now it is just a generic name
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 8, // 8 hours
  }
};
 
app.use(session(sessionConfig));

// Allow access to static resources in the public directory
app.use(express.static("public", {index: "index.html", extensions: ["html"]}));

// Controllers 
const HostController = require("./Controllers/hostControllers");
const UserController = require("./Controllers/userControllers");

//Validators 
const hostValidation = require("./Validators/hostValidation");
const userValidation = require("./Validators/userValidation");

app.use(express.static("public", {index: "index.html", extensions: ["html"]}));

// The maximum request body size is 100 kilobytes; however, my word list was
// ~150kb. So I just doubled the request body size limit
app.use(express.json({limit: '200kb'}));
app.use(express.urlencoded({ extended: false }));

//Endpoints 
app.post("/api/login", hostValidation.hostValidation, HostController.login);
app.post("/api/host", hostValidation.hostValidation, HostController.createNewHost);

app.post("/api/userlogin", userValidation.userValidation, UserController.userlogin);
app.post("/api/user", userValidation.userValidation, UserController.createNewuser);
app.post("/api/time", userValidation.userValidation, UserController.userTimeAvailable);

module.exports = app;
