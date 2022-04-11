"use strict";
const { sendStatus } = require("express/lib/response");
const db = require("./db");
const crypto = require("crypto"); 
const argon2 = require('argon2');

// need to make password hash function
function addUser(user){
    const sql = `
    INSERT INTO User
        (user)
    VALUES
        (@user)
    `;
    const adduserStmt = db.prepare(sql);
    adduserStmt.run({user});
}

function addOrganizationUser(organization){
    const sql = `
    INSERT INTO Organization
        (organization)
    VALUES
        (@organization)
    `;
    const addOrganizationUserStmt = db.prepare(sql);
    addOrganizationUserStmt.run({organization});
}

function getUser(organization){
    const sql = `
    SELECT * FROM User WHERE organization = @organization
    `;
    const getUserStmt = db.prepare(sql);
    const record = getUserStmt.get({
        "organization": organization
    });
    return record;
}

function getUsers(organization){
    for(let x of organization){
        getUser(x);
    }
    return users
}

function checkTime(time){
    const sql = `
    UPDATE INTO UserTimes(amone_two, amtwo_three, amthree_four, amfour_five, amfive_six, amsix_seven, amseven_eight,
                          ameight_nine, amnine_ten, amten_eleven, ameleven_twelve, amtwelve_pmone, pmone_two,
                          pmtwo_three, pmthree_four, pmfour_five, pmfive_six, pmsix_seven, pmseven_eight,
                          pmeight_nine, pmnine_ten, pmten_eleven, pmeleven_twelve, pmtwelve_amone,
                          organizationid)
                VALUES(@amone_two, @amtwo_three, @amthree_four, @amfour_five, @amfive_six, @amsix_seven, @amseven_eight,
                       @ameight_nine, @amnine_ten, @amten_eleven, @ameleven_twelve, @amtwelve_pmone, @pmone_two,
                       @pmtwo_three, @pmthree_four, @pmfour_five, @pmfive_six, @pmsix_seven, @pmseven_eight,
                       @pmeight_nine, @pmnine_ten, @pmten_eleven, @pmeleven_twelve, @pmtwelve_amone,
                       @organizationid)
    `;
    const checkTime = db.prepare(sql);
    
}


let pm12am1 = true,am1am2 = true,am2am3 = true,am3am4 = true,am4am5 = true,am5am6 = true;
let am6am7 = true,am7am8 = true,am8am9 = true,am9am10 = true,am10am11 = true,am11am12 = true;
let am12pm1 = true,pm1pm2 = true,pm2pm3 = true,pm3pm4 = true,pm4pm5 = true,pm5pm6 = true;
let pm6pm7 = true,pm7pm8 = true,pm8pm9 = true,pm9pm10 = true,pm10pm11 = true,pm11pm12 = true;

function checkTime(users,times){//a = 1-2 b = 2-3
    for(let x of users){
        for(let y of times){
            if(y === a){
                am1am2 = false;
            }else if(y === b){
                am2am3 = false;
            }else if(y === c){
                am3am4 = false;
            }else if(y === d){
                am4am5 = false;
            }else if(y === e){
                am5am6 = false;
            }else if(y === f){
                am6am7 = false;
            }else if(y === g){
                am7am8 = false;
            }else if(y === h){
                am8am9 = false;
            }else if(y === i){
                am9am10 = false;
            }else if(y === j){
                am10am11 = false;
            }else if(y === k){
                am11am12 = false;
            }else if(y === l){
                am12pm1 = false;
            }else if(y === m){
                pm1pm2 = false;
            }else if(y === n){
                pm2pm3 = false;
            }else if(y === o){
                pm3pm4 = false;
            }else if(y === p){
                pm4pm5 = false;
            }else if(y === q){
                pm5pm6 = false;
            }else if(y === r){
                pm6pm7 = false;
            }else if(y === s){
                pm7pm8 = false;
            }else if(y === t){
                pm8pm9 = false;
            }else if(y === u){
                pm9pm10 = false;
            }else if(y === v){
                pm10pm11 = false;
            }else if(y === w){
                pm11pm12 = false;
            }else if(y === x){
                pm12am1 = false;
            }else{
                sendStatus(400);
            }
        }
    }
}



exports.addUser = addUser;
exports.checkTime = checkTime;
exports.getUser = getUser;
exports.getUsers = getUsers;
exports.addOrganizationUser = addOrganizationUser;
