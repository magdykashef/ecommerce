CREATE TABLE IF NOT EXISTS products (
pruduct_id SERIAL PRIMARY KEY,
    create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    product_name VARCHAR(150) NOT NULL UNIQUE,
    category VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    discount INTEGER,
    description VARCHAR(300) NOT NULL,
    image_1 VARCHAR(300) NOT NULL,
    image_2 VARCHAR(300),
    image_3 VARCHAR(300),
    image_4 VARCHAR(300),
    image_5 VARCHAR(300),
    update_date TIMESTAMP,
    delete_date TIMESTAMP
);