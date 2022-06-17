CREATE TABLE product_reviews (
    review_id SERIAL PRIMARY KEY NOT NULL,
    comment VARCHAR(1500) NOT NULL,
    rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
    product_id INT REFERENCES products(product_id),
    user_id UUID,
    CONSTRAINT fk_user
    FOREIGN KEY(user_id) 
    REFERENCES users(user_id)
);