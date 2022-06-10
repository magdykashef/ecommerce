CREATE TABLE IF NOT EXISTS orders(
order_id SERIAL PRIMARY KEY, 
    order_status VARCHAR(50) NOT NULL,
    purchase_date DATE NOT NULL DEFAULT CURRENT_DATE,
    delivery_date DATE,
    user_id UUID,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
            REFERENCES users(user_id)
);