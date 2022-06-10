CREATE TABLE IF NOT EXISTS orders(
order_id SERIAL PRIMARY KEY, 
    user_id VARCHAR REFERENCES users(user_id) NOT NULL,
    status VARCHAR(50) NOT NULL,
    purchase_date DATE NOT NULL DEFAULT CURRENT_DATE,
    delivery_date DATE
);