CREATE TABLE IF NOT EXISTS orders (
_id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    _order_status VARCHAR(50) NOT NULL
);