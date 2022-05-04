"use strict";
const db = require("./db");
var crypto = require('crypto');

async function addHost(username, password, organization, email) {
    try{
        const hostID = crypto.randomUUID(username);
        const hash = await argon2.hash(password);
        const sql = `INSERT INTO Host (hostID, hostname, hash, organization, email)
                     VALUES (@hostID, @hostname, @hash, @organization, @email)`;
        const stmt = db.prepare(sql);
        stmt.run({hostID, hostname, hash, organization, email});
    } catch(e){
        console.error(e);
    }  
}

module.exports = {
    addHost,
}
