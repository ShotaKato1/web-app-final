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