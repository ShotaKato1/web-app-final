"use strict";
const redis = require('redis');
const session = require('express-session');

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

const express = require("express");
const app = express();
app.use(express.json());

// Allow access to static resources in the public directory
app.use(express.static("public", {index: "index.html", extensions: ["html"]}));

app.use(
    session({
	store: new RedisStore({ client: redisClient }),
	secret: process.env.COOKIE_SECRET, 
	resave: false,
	saveUninitialized: false
    })
);



const HostController = require("./Controllers/hostControllers");

app.post("/api/login", HostController.login);
app.post("/api/host", HostController.createNewHost);

module.exports = app;