/* Replace with your SQL commands */
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150),
    total_pages integer,
    author VARCHAR(255),
    type VARCHAR(100),
    summary text
);

INSERT INTO books (title, author, total_pages, type, summary) VALUES ('Bridge to Terabithia', 'Katherine Paterson', 208, 'childrens','A good book' )