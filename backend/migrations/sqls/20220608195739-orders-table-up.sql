CREATE TABLE IF NOT EXISTS orders(
order_id SERIAL PRIMARY KEY, 
    user_id VARCHAR REFERENCES users(user_id) NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    quantity INTEGER NOT NULL,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE
);