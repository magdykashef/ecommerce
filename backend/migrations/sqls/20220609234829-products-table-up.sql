CREATE TABLE IF NOT EXISTS products (
product_id SERIAL PRIMARY KEY,
    create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    product_name VARCHAR(150) NOT NULL UNIQUE,
    category VARCHAR(100) NOT NULL,
    price NUMERIC(17, 2) NOT NULL,
    discount INTEGER,
    quantity INTEGER NOT NULL,
    description VARCHAR(255) NOT NULL,
    image_1 VARCHAR(255) NOT NULL,
    image_2 VARCHAR(255),
    image_3 VARCHAR(255),
    image_4 VARCHAR(255),
    image_5 VARCHAR(255),
    update_date TIMESTAMP,
    delete_date TIMESTAMP
);