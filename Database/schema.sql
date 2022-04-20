CREATE TABLE IF NOT EXISTS Host (
    hostID TEXT PRIMARY KEY,
    hostname TEXT UNIQUE NOT NULL,
    hash TEXT UNIQUE NOT NULL, 
    organization TEXT UNIQUE NOT NULL,
    ID TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    FOREIGN KEY (ID) REFERENCES Organization(organizationID)
);

CREATE TABLE IF NOT EXISTS User(
    userID TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    organization TEXT UNIQUE NOT NULL,
    id TEXT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Organization(organizationID)
);

CREATE TABLE IF NOT EXISTS UserTime(
    amone_two Boolean DEFAULT 0,
    amtwo_three Boolean DEFAULT 0,
    amthree_four Boolean DEFAULT 0,
    amfour_five Boolean DEFAULT 0,
    amfive_six Boolean DEFAULT 0,
    amsix_seven Boolean DEFAULT 0,
    amseven_eight Boolean DEFAULT 0,
    ameight_nine Boolean DEFAULT 0,
    amnine_ten Boolean DEFAULT 0,
    amten_eleven Boolean DEFAULT 0,
    ameleven_twelve Boolean DEFAULT 0,
    amtwelve_pmone Boolean DEFAULT 0,
    pmone_two Boolean DEFAULT 0,
    pmtwo_three Boolean DEFAULT 0,
    pmthree_four Boolean DEFAULT 0,
    pmfour_five Boolean DEFAULT 0,
    pmfive_six Boolean DEFAULT 0,
    pmsix_seven Boolean DEFAULT 0,
    pmseven_eight Boolean DEFAULT 0,
    pmeight_nine Boolean DEFAULT 0,
    pmnine_ten Boolean DEFAULT 0,
    pmten_eleven Boolean DEFAULT 0,
    pmeleven_twelve Boolean DEFAULT 0,
    pmtwelve_amone Boolean DEFAULT 0,
    organizationid PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Organization(
    organizationid TEXT PRIMARY KEY,
    author TEXT UNIQUE NOT NULL,
    FOREIGN KEY (auhtor) REFERENCES User(username)
);
