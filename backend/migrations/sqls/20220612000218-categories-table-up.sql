CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY, 
    category_name VARCHAR(64) NOT NULL,
    product_id INT REFERENCES products(product_id)
);
