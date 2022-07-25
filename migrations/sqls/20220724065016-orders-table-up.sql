/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id integer, -- id of each product in the order
    product_qty integer, --quantity of each product in the order
    -- user_id integer REFERENCES users (id) ON DELETE CASCADE,
    user_id integer,
    CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    status_complete boolean --status of order (active or complete) false if active
)