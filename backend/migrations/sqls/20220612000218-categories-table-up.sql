CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY, 
    category_name VARCHAR(64) UNIQUE NOT NULL 
);
