CREATE TABLE IF NOT EXISTS orders (
_id SERIAL PRIMARY KEY, 
    _pid INTEGER REFERENCES products(_id) NOT NULL, 
    _uid INTEGER REFERENCES users(_id) NOT NULL, 
    _quantity INTEGER NOT NULL, 
    _order_status VARCHAR(50) NOT NULL
);