"use strict";
const redis = require('redis');
const session = require('express-session');

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

const express = require("express");
const app = express();
app.use(express.json());

app.use(
    session({
	store: new RedisStore({ client: redisClient }),
	secret: process.env.COOKIE_SECRET, 
	resave: false,
	saveUninitialized: false
    })
);



const UserModel = require("./Models/UserModel");
const HostModel = require("./Models/hostModel");



module.exports = app;