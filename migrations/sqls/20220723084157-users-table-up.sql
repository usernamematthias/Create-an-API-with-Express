/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(80),
    lastname VARCHAR(50),
    username VARCHAR(50),
    -- password varchar(50),
    password_digist VARCHAR(512)
);