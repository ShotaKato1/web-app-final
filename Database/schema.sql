CREATE TABLE IF NOT EXISTS Host (
    hostid TEXT PRIMARY KEY,
    hostName TEXT UNIQUE NOT NULL,
    hash TEXT UNIQUE NOT NULL, 
    organization TEXT UNIQUE NOT NULL,
    organizationid TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL
    
);

CREATE TABLE IF NOT EXISTS User(
    userName TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    organization TEXT UNIQUE NOT NULL,
    organizationid TEXT PRIMARY KEY
);


CREATE TABLE IF NOT EXISTS UserTime(
    amone_two Boolean DEFAULT 1,
    amtwo_three Boolean DEFAULT 1,
    amthree_four Boolean DEFAULT 1,
    amfour_five Boolean DEFAULT 1,
    amfive_six Boolean DEFAULT 1,
    amsix_seven Boolean DEFAULT 1,
    amseven_eight Boolean DEFAULT 1,
    ameight_nine Boolean DEFAULT 1,
    amnine_ten Boolean DEFAULT 1,
    amten_eleven Boolean DEFAULT 1,
    ameleven_twelve Boolean DEFAULT 1,
    amtwelve_pmone Boolean DEFAULT 1,
    pmone_two Boolean DEFAULT 1,
    pmtwo_three Boolean DEFAULT 1,
    pmthree_four Boolean DEFAULT 1,
    pmfour_five Boolean DEFAULT 1,
    pmfive_six Boolean DEFAULT 1,
    pmsix_seven Boolean DEFAULT 1,
    pmseven_eight Boolean DEFAULT 1,
    pmeight_nine Boolean DEFAULT 1,
    pmnine_ten Boolean DEFAULT 1,
    pmten_eleven Boolean DEFAULT 1,
    pmeleven_twelve Boolean DEFAULT 1,
    pmtwelve_amone Boolean DEFAULT 1,
    organizationid PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Organization(
    organizationid PRIMARY KEY,
    userName TEXT UNIQUE NOT NULL
);
