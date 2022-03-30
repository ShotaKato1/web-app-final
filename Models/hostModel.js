"use strict";
const db = require("./db");
var crypto = require('crypto');


async function addHost(username, password) {

    try{
        const hostID = crypto.randomUUID(username);
        const hash = await argon2.hash(password);
        const sql = `INSERT INTO User (hostid, hostname, hash) VALUES (@hostID, @hostname, @hash)`;
        const stmt = db.prepare(sql);
        stmt.run({userID, username, hash});
    } catch(e){
        console.error(e);
    }
    
}

function getUserByUsername (username){
    const sql = `SELECT * FROM User Where username=@username`;
    const stmt = db.prepare(sql);
    const record = stmt.get({"username": username});
    return record;
}

module.exports = {
    addHost,
    getUserByUsername,
}