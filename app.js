"use strict";
require("dotenv").config();

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

app.post("/api/login", HostController.login);
app.post("/api/host", HostController.createNewHost);


module.exports = app;
