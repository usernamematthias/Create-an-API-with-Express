/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100),
    price DECIMAL (4, 2) -- max price is 9999.99 4-digits before point 2 after
)