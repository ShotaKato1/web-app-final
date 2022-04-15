"use strict";
const { sendStatus } = require("express/lib/response");
const db = require("./db");
const crypto = require("crypto"); 
const argon2 = require('argon2');

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

function checkTime(organization){
    const sql = `
    UPDATE UserTimes
    SET
        amone_two = CASE WHEN @amone_two = '1' 
        THEN amone_two = @amone_two 
        ELSE amone_two = amone_two END,

        amtwo_three = CASE WHEN @amtwo_three = '1' 
        THEN amtwo_three = @amtwo_three 
        ELSE amtwo_three = amtwo_three END,

        amthree_four = CASE WHEN @amthree_four = '1'
         THEN amthree_four = @amthree_four 
        ELSE amthree_four = amthree_four END,

        amfour_five = CASE WHEN @amfour_five = '1' 
        THEN amfour_five = @amfour_five 
        ELSE amfour_five = amfour_five END,

        amfive_six = CASE WHEN @amfive_six = '1' 
        THEN amfive_six = @amfive_six 
        ELSE amfive_six = amfive_six END,

        amsix_seven = CASE WHEN @amsix_seven = '1' 
        THEN amsix_seven = @amsix_seven 
        ELSE amsix_seven = amsix_seven END,

        amseven_eight = CASE WHEN @amseven_eight = '1' 
        THEN amseven_eight = @amseven_eight 
        ELSE amseven_eight = amseven_eight END,

        ameight_nine = CASE WHEN @ameight_nine = '1' 
        THEN ameight_nine = @ameight_nine 
        ELSE ameight_nine = ameight_nine END,

        amnine_ten = CASE WHEN @amnine_ten = '1' 
        THEN amnine_ten = @amnine_ten 
        ELSE amnine_ten = amnine_ten END,

        amten_eleven = CASE WHEN @amten_eleven = '1' 
        THEN amten_eleven = @amten_eleven 
        ELSE amten_eleven = amten_eleven END,

        ameleven_twelve = CASE WHEN @ameleven_twelve = '1' 
        THEN ameleven_twelve = @ameleven_twelve 
        ELSE ameleven_twelve = ameleven_twelve END,
        
        amtwelve_pmone = CASE WHEN @amtwelve_pmone = '1' 
        THEN amtwelve_pmone = @amtwelve_pmone 
        ELSE amtwelve_pmone = amtwelve_pmone END,

        pmone_two = CASE WHEN @pmone_two = '1' 
        THEN pmone_two = @pmone_two 
        ELSE pmone_two = pmone_two END,

        pmtwo_three = CASE WHEN @pmtwo_three = '1' 
        THEN pmtwo_three = @pmtwo_three 
        ELSE pmtwo_three = pmtwo_three END,

        pmthree_four = CASE WHEN @pmthree_four = '1' 
        THEN pmthree_four = @pmthree_four 
        ELSE pmthree_four = pmthree_four END,

        pmfour_five = CASE WHEN @pmfour_five = '1' 
        THEN pmfour_five = @pmfour_five 
        ELSE pmfour_five = pmfour_five END,

        pmfive_six = CASE WHEN @pmfive_six = '1' 
        THEN pmfive_six = @pmfive_six 
        ELSE pmfive_six = pmfive_six END,

        pmsix_seven = CASE WHEN @pmsix_seven = '1' 
        THEN pmsix_seven = @pmsix_seven 
        ELSE pmsix_seven = pmsix_seven END,

        pmseven_eight = CASE WHEN @pmseven_eight = '1' 
        THEN pmseven_eight = @pmseven_eight 
        ELSE pmseven_eight = pmseven_eight END,

        pmeight_nine = CASE WHEN @pmeight_nine = '1' 
        THEN pmeight_nine = @pmeight_nine 
        ELSE pmeight_nine = pmeight_nine END,

        pmnine_ten = CASE WHEN @pmnine_ten = '1' 
        THEN pmnine_ten = @pmnine_ten 
        ELSE pmnine_ten = pmnine_ten END,

        pmten_eleven = CASE WHEN @pmten_eleven = '1' 
        THEN pmten_eleven = @pmten_eleven 
        ELSE pmten_eleven = pmten_eleven END,

        pmeleven_twelve = CASE WHEN @pmeleven_twelve = '1' 
        THEN pmeleven_twelve = @pmeleven_twelve 
        ELSE pmeleven_twelve = pmeleven_twelve END,

        pmtwelve_amone = CASE WHEN @pmtwelve_amone = '1' 
        THEN pmtwelve_amone = @pmtwelve_amone 
        ELSE pmtwelve_amone = pmtwelve_amone END,

    WHERE
            organization = 'organization'
    `;
    const checkTime = db.prepare(sql);
    checkTime.run({
        "organization": organization
    })
}

let pm12am1 = true,am1am2 = true,am2am3 = true,am3am4 = true,am4am5 = true,am5am6 = true;
let am6am7 = true,am7am8 = true,am8am9 = true,am9am10 = true,am10am11 = true,am11am12 = true;
let am12pm1 = true,pm1pm2 = true,pm2pm3 = true,pm3pm4 = true,pm4pm5 = true,pm5pm6 = true;
let pm6pm7 = true,pm7pm8 = true,pm8pm9 = true,pm9pm10 = true,pm10pm11 = true,pm11pm12 = true;

function checkTimes(users,times){//a = 1-2 b = 2-3
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

module.exports = {
    addUser,
    addOrganizationUser,
    getUser,
    getUsers,
    checkTime,
    checkTimes, 
}
