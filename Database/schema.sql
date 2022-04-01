CREATE TABLE IF NOT EXISTS Host (
    hostid TEXT PRIMARY KEY,
    hostName TEXT UNIQUE NOT NULL,
    hash TEXT UNIQUE NOT NULL, 
    organization TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL
    
);

CREATE TABLE IF NOT EXISTS User(
    userName TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    organization TEXT UNIQUE NOT NULL
)

CREATE TABLE IF NOT EXISTS Time(
    1-2 Boolean DEFAULT 1,
    2-3 Boolean DEFAULT 1,
    3-4 Boolean DEFAULT 1,
    4-5 Boolean DEFAULT 1,
    5-6 Boolean DEFAULT 1,
    6-7 Boolean DEFAULT 1,
    7-8 Boolean DEFAULT 1,
    8-9 Boolean DEFAULT 1,
    9-10 Boolean DEFAULT 1,
    10-11 Boolean DEFAULT 1,
    11-12 Boolean DEFAULT 1,
    12-13 Boolean DEFAULT 1,
    13-14 Boolean DEFAULT 1,
    14-15 Boolean DEFAULT 1,
    15-16 Boolean DEFAULT 1,
    16-17 Boolean DEFAULT 1,
    17-18 Boolean DEFAULT 1,
    19-20 Boolean DEFAULT 1,
    20-21 Boolean DEFAULT 1,
    21-22 Boolean DEFAULT 1,
    22-23 Boolean DEFAULT 1,
    23-24 Boolean DEFAULT 1,
    24-1 Boolean DEFAULT 1,
)
