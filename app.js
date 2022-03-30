"use strict";
const redis = require('redis');
const session = require('express-session');

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

app.use(
    session({
	store: new RedisStore({ client: redisClient }),
	secret: process.env.COOKIE_SECRET, 
	resave: false,
	saveUninitialized: false
    })
);

const app = express();
app.use(express.json());

const UserModel = require("./Models/UserModel");
const HostModel = require("./Models/hostModel");
const express = require("express");
