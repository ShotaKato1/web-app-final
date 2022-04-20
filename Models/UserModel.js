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
        amone_two = CASE @amone_two WHEN  '1' 
        THEN amone_two = @amone_two 
        ELSE amone_two = amone_two END,

        amtwo_three = CASE @amtwo_three WHEN '1' 
        THEN amtwo_three = @amtwo_three 
        ELSE amtwo_three = amtwo_three END,

        amthree_four = CASE @amthree_four WHEN '1'
         THEN amthree_four = @amthree_four 
        ELSE amthree_four = amthree_four END,

        amfour_five = CASE @amfour_five WHEN '1' 
        THEN amfour_five = @amfour_five 
        ELSE amfour_five = amfour_five END,

        amfive_six = CASE @amfive_six WHEN '1' 
        THEN amfive_six = @amfive_six 
        ELSE amfive_six = amfive_six END,

        amsix_seven = CASE @amsix_seven WHEN '1' 
        THEN amsix_seven = @amsix_seven 
        ELSE amsix_seven = amsix_seven END,

        amseven_eight = CASE @amseven_eight WHEN '1' 
        THEN amseven_eight = @amseven_eight 
        ELSE amseven_eight = amseven_eight END,

        ameight_nine = CASE @ameight_nine WHEN '1' 
        THEN ameight_nine = @ameight_nine 
        ELSE ameight_nine = ameight_nine END,

        amnine_ten = CASE @amnine_ten WHEN '1' 
        THEN amnine_ten = @amnine_ten 
        ELSE amnine_ten = amnine_ten END,

        amten_eleven = CASE @amten_eleven WHEN '1' 
        THEN amten_eleven = @amten_eleven 
        ELSE amten_eleven = amten_eleven END,

        ameleven_twelve = CASE @ameleven_twelve WHEN  '1' 
        THEN ameleven_twelve = @ameleven_twelve 
        ELSE ameleven_twelve = ameleven_twelve END,
        
        amtwelve_pmone = CASE @amtwelve_pmone WHEN '1' 
        THEN amtwelve_pmone = @amtwelve_pmone 
        ELSE amtwelve_pmone = amtwelve_pmone END,

        pmone_two = CASE @pmone_two WHEN '1' 
        THEN pmone_two = @pmone_two 
        ELSE pmone_two = pmone_two END,

        pmtwo_three = CASE @pmtwo_three WHEN '1' 
        THEN pmtwo_three = @pmtwo_three 
        ELSE pmtwo_three = pmtwo_three END,

        pmthree_four = CASE @pmthree_four WHEN '1' 
        THEN pmthree_four = @pmthree_four 
        ELSE pmthree_four = pmthree_four END,

        pmfour_five = CASE @pmfour_five WHEN  '1' 
        THEN pmfour_five = @pmfour_five 
        ELSE pmfour_five = pmfour_five END,

        pmfive_six = CASE @pmfive_six WHEN '1' 
        THEN pmfive_six = @pmfive_six 
        ELSE pmfive_six = pmfive_six END,

        pmsix_seven = CASE @pmsix_seven WHEN '1' 
        THEN pmsix_seven = @pmsix_seven 
        ELSE pmsix_seven = pmsix_seven END,

        pmseven_eight = CASE @pmseven_eight WHEN '1' 
        THEN pmseven_eight = @pmseven_eight 
        ELSE pmseven_eight = pmseven_eight END,

        pmeight_nine = CASE @pmeight_nine WHEN '1' 
        THEN pmeight_nine = @pmeight_nine 
        ELSE pmeight_nine = pmeight_nine END,

        pmnine_ten = CASE @pmnine_ten WHEN '1' 
        THEN pmnine_ten = @pmnine_ten 
        ELSE pmnine_ten = pmnine_ten END,

        pmten_eleven = CASE @pmten_eleven WHEN '1' 
        THEN pmten_eleven = @pmten_eleven 
        ELSE pmten_eleven = pmten_eleven END,

        pmeleven_twelve = CASE @pmeleven_twelve WHEN '1' 
        THEN pmeleven_twelve = @pmeleven_twelve 
        ELSE pmeleven_twelve = pmeleven_twelve END,

        pmtwelve_amone = CASE @pmtwelve_amone WHEN '1' 
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

module.exports = {
    addUser,
    addOrganizationUser,
    getUser,
    getUsers,
    checkTime,
}
