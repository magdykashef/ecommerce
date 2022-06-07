CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
user_id uuid DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE,
    user_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    register_date DATE NOT NULL DEFAULT CURRENT_DATE,
    role VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)
);