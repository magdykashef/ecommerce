



                          #### API Endpoints ####

### Users Endpoints:

    1-  Index:
            method: GET
            endpoint: /users
            required:
                authentication: true
                role: admin user
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: list of all registered users
                failure:
                    statusCode: 403
                    messageData: "Forbidden! User must be admin..."

    2-  Show:
            method: GET
            endpoint: /users/:id
            required:
                authentication: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: an object of the user requested by id
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    3-  Create:
            method: POST
            endpoint: /users
            required:
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "User is successfully created!"
                    data: an object of the created user
                failure:
                    statusCode: 500
                    messageData: "Sorry! It is from us we will be back soon..."

    4-  Update:
            method: PUT
            endpoint: /users/:id
            required:
                authentication: true
				user id: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "User is successfully updated!"
                    data: an object of the updated user
                failure:
                    statusCode: 500
                    messageData: "Sorry! It is from us we will be back soon..."

    5-  Delete:
            method: DELETE
            endpoint: /users/:id
            required:
                authentication: true
                role: admin
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "User is successfully deleted!"
                failure:
                    statusCode: 403
                    messageData: "Forbidden! User must be admin..."


### Products Endpoints:

    1-  Index:
            method: GET
            endpoint: /products
            required:
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: list of all products


    2-  Show:
            method: GET
            endpoint: /products/:id
            required:
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: an object of the product requested by id
                failure:
                    statusCode: 400
                    messageData: "Bad Request! No product for this id"

    3-  Create:
            method: POST
            endpoint: /products
            required:
                authentication: true
				role: admin user
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "Product is successfully created!"
                    data: an object of the created product
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    4-  Update:
            method: PUT
            endpoint: /products/:id
            required:
                authentication: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "Product is successfully updated!"
                    data: an object of the updated product
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    5-  Delete:
            method: DELETE
            endpoint: /products/:id
            required:
                authentication: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "Product is successfully deleted!"
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    6-  Onsale:
            method: GET
            endpoint: /products
            required:
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: list of all products on sale
                failure:
                    statusCode: 400
                    messageData: "Bad Request!"

### Orders Endpoints:

    1-  Index:
            method: GET
            endpoint: /users/:id/orders
            required:
                authentication: true
                user id: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: list of all orders per user
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    2-  Show:
            method: GET
            endpoint: /users/:id/orders/:id
            required:
                authentication: true
                user id: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData:
                    data: an object of the order by id for a given user
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    3-  Create:
            method: POST
            endpoint: /users/:id/orders
            required:
                authentication: true
                user id: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "Order is successfully created!"
                    data: an object of the created order
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    4-  Update:
            method: PUT
            endpoint: /users/:id/orders/:id
            required:
                authentication: true
                user id: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "order is successfully updated!"
                    data: an object of the updated order
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."

    5-  Delete:
            method: DELETE
            endpoint: /users/:id/orders/:id
            required:
                authentication: true
                user id: true
            req:
            response:
                success:
                    statusCode: 200
                    messageData: "Order is successfully deleted!"
                failure:
                    statusCode: 401
                    messageData: "Unauthorized! User must be logged in..."
        


                           #### DATABASE ####

### Preparing the database:

    1-  Creating the database:

        Database Name: sprints_ecommerce_database

        you should create a database on postgres with the name above and store this name in your .env file for POSTGRES_DB attribute.

    2-  Creating the migrations files in this order.

        1- Run: npm install -g db-migrate
        2- Run: db-migrate create users-table --sql-file
		3- Run: db-migrate create products-table --sql-file
		4- Run: db-migrate create orders-table --sql-file
		5- Run: db-migrate create order_products-table --sql-file
		6- Run: db-migrate create categories-table --sql-file
		7- Run: db-migrate create brands-table --sql-file

    3-  Filling the files with SQL statements of the tables schema below

        1-  users => up
            
            CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY,
                email VARCHAR(100) NOT NULL UNIQUE,
				user_name VARCHAR(50) NOT NULL,
                first_name VARCHAR(50) NOT NULL,
                last_name VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                phone VARCHAR(50) NOT NULL,
                address VARCHAR(255) NOT NULL,
                register_date DATE NOT NULL DEFAULT CURRENT_DATE,
                role VARCHAR(50) NOT NULL,
                status VARCHAR(50) NOT NULL
            );
           
            users => down
            
            DROP TABLE users;
        
        2-  products => up

            CREATE TABLE IF NOT EXISTS products (_id SERIAL PRIMARY KEY,
                _create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                _name VARCHAR(150) NOT NULL UNIQUE,
                _category VARCHAR(100) NOT NULL,
                _price INTEGER NOT NULL,
                _discount INTEGER,
                _description VARCHAR(300) NOT NULL,
                _image_1 VARCHAR(300) NOT NULL,
                _image_2 VARCHAR(300),
                _image_3 VARCHAR(300),
                _image_4 VARCHAR(300),
                _image_5 VARCHAR(300),
                _update_date TIMESTAMP,
                _delete_date TIMESTAMP
            );

            products => down

            DROP TABLE products;

        3-  orders => up

            CREATE TABLE IF NOT EXISTS orders (_id SERIAL PRIMARY KEY, 
                _pid INTEGER REFERENCES products(_id) NOT NULL, 
                _uid INTEGER REFERENCES users(_id) NOT NULL, 
                _quantity INTEGER NOT NULL, 
                _order_status VARCHAR(50) NOT NULL
            );

            orders => down

            DROP TABLE orders;

        4-  order_products => up

            CREATE TABLE IF NOT EXISTS order_products (_id SERIAL PRIMARY KEY, 
                _oid INTEGER REFERENCES orders(_id) NOT NULL, 
                _pid INTEGER REFERENCES products(_id) NOT NULL, 
                _quantity INTEGER NOT NULL
            );

            order_products => down

            DROP TABLE order_products;

        5-  categories => up

            CREATE TABLE IF NOT EXISTS categories (_id SERIAL PRIMARY KEY,
                _name VARCHAR(50) NOT NULL UNIQUE,
                _pid INTEGER REFERENCES products(_id) NOT NULL,
                _p_name VARCHAR(150) REFERENCES products(_name) NOT NULL,
                _quantity INTEGER NOT NULL
            );

            categories => down

            DROP TABLE categories;

        6-  brands => up

            CREATE TABLE IF NOT EXISTS brands (_id SERIAL PRIMARY KEY,
                _name VARCHAR(50) NOT NULL UNIQUE,
                _cid INTEGER REFERENCES categories(_id) NOT NULL,
                _c_name VARCHAR(150) REFERENCES categories(_name) NOT NULL,
                _pid INTEGER REFERENCES products(_id) NOT NULL,
                _p_name VARCHAR(150) REFERENCES products(_name) NOT NULL
            );

            brands => down

            DROP TABLE brands;

    4-  Running the migration script to create the tables:

        Run: db-migrate reset && db-migrate up 



### Database Tables Schema:


                            ## Users Table ## 

                                          Table "public.users"
    Column     |          Type          | Collation | Nullable |                Default
---------------+------------------------+-----------+----------+----------------------------------------
 user_id       | integer                |           | not null | nextval('users_user_id_seq'::regclass)
 email         | character varying(100) |           | not null |
 user_name     | character varying(50)  |           | not null |
 first_name    | character varying(50)  |           | not null |
 last_name     | character varying(50)  |           | not null |
 password      | character varying(255) |           | not null |
 phone         | character varying(50)  |           | not null |
 address       | character varying(255) |           | not null |
 register_date | date                   |           | not null | CURRENT_DATE
 role          | character varying(50)  |           | not null |
 status        | character varying(50)  |           | not null |
Indexes:
    "users_pkey" PRIMARY KEY, btree (user_id)
    "users_email_key" UNIQUE CONSTRAINT, btree (email)

                            ## Products Table ##

                                          Table "public.products"
    Column    |            Type             | Collation | Nullable |                Default
--------------+-----------------------------+-----------+----------+---------------------------------------
 _id          | integer                     |           | not null | nextval('products__id_seq'::regclass)
 _create_date | timestamp without time zone |           | not null | CURRENT_TIMESTAMP
 _name        | character varying(150)      |           | not null |
 _category    | character varying(100)      |           | not null |
 _price       | integer                     |           | not null |
 _discount    | integer                     |           |          |
 _description | character varying(300)      |           | not null |
 _image_1     | character varying(300)      |           | not null |
 _image_2     | character varying(300)      |           |          |
 _image_3     | character varying(300)      |           |          |
 _image_4     | character varying(300)      |           |          |
 _image_5     | character varying(300)      |           |          |
 _update_date | timestamp without time zone |           |          |
 _delete_date | timestamp without time zone |           |          |
Indexes:
    "products_pkey" PRIMARY KEY, btree (_id)
    "products__name_key" UNIQUE CONSTRAINT, btree (_name)
Referenced by:
    TABLE "brands" CONSTRAINT "brands__p_name_fkey" FOREIGN KEY (_p_name) REFERENCES products(_name)
    TABLE "brands" CONSTRAINT "brands__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)
    TABLE "categories" CONSTRAINT "categories__p_name_fkey" FOREIGN KEY (_p_name) REFERENCES products(_name)
    TABLE "categories" CONSTRAINT "categories__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)
    TABLE "order_products" CONSTRAINT "order_products__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)
    TABLE "orders" CONSTRAINT "orders__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)

                            ## Orders Table ##

                                       Table "public.orders"
    Column     |         Type          | Collation | Nullable |               Default
---------------+-----------------------+-----------+----------+-------------------------------------
 _id           | integer               |           | not null | nextval('orders__id_seq'::regclass)
 _pid          | integer               |           | not null |
 _uid          | integer               |           | not null |
 _quantity     | integer               |           | not null |
 _order_status | character varying(50) |           | not null |
Indexes:
    "orders_pkey" PRIMARY KEY, btree (_id)
Foreign-key constraints:
    "orders__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)
    "orders__uid_fkey" FOREIGN KEY (_uid) REFERENCES users(_id)
Referenced by:
    TABLE "order_products" CONSTRAINT "order_products__oid_fkey" FOREIGN KEY (_oid) REFERENCES orders(_id)

                            ## Order_Products Table ##

                              Table "public.order_products"
  Column   |  Type   | Collation | Nullable |                   Default
-----------+---------+-----------+----------+---------------------------------------------
 _id       | integer |           | not null | nextval('order_products__id_seq'::regclass)
 _oid      | integer |           | not null |
 _pid      | integer |           | not null |
 _quantity | integer |           | not null |
Indexes:
    "order_products_pkey" PRIMARY KEY, btree (_id)
Foreign-key constraints:
    "order_products__oid_fkey" FOREIGN KEY (_oid) REFERENCES orders(_id)
    "order_products__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)

                            ## Categories Table ##

                                      Table "public.categories"
  Column   |          Type          | Collation | Nullable |                 Default
-----------+------------------------+-----------+----------+-----------------------------------------
 _id       | integer                |           | not null | nextval('categories__id_seq'::regclass)
 _name     | character varying(50)  |           | not null |
 _pid      | integer                |           | not null |
 _p_name   | character varying(150) |           | not null |
 _quantity | integer                |           | not null |
Indexes:
    "categories_pkey" PRIMARY KEY, btree (_id)
    "categories__name_key" UNIQUE CONSTRAINT, btree (_name)
Foreign-key constraints:
    "categories__p_name_fkey" FOREIGN KEY (_p_name) REFERENCES products(_name)
    "categories__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)
Referenced by:
    TABLE "brands" CONSTRAINT "brands__c_name_fkey" FOREIGN KEY (_c_name) REFERENCES categories(_name)
    TABLE "brands" CONSTRAINT "brands__cid_fkey" FOREIGN KEY (_cid) REFERENCES categories(_id)

                            ## Brands Table ##

                                     Table "public.brands"
 Column  |          Type          | Collation | Nullable |               Default
---------+------------------------+-----------+----------+-------------------------------------
 _id     | integer                |           | not null | nextval('brands__id_seq'::regclass)
 _name   | character varying(50)  |           | not null |
 _cid    | integer                |           | not null |
 _c_name | character varying(150) |           | not null |
 _pid    | integer                |           | not null |
 _p_name | character varying(150) |           | not null |
Indexes:
    "brands_pkey" PRIMARY KEY, btree (_id)
    "brands__name_key" UNIQUE CONSTRAINT, btree (_name)
Foreign-key constraints:
    "brands__c_name_fkey" FOREIGN KEY (_c_name) REFERENCES categories(_name)
    "brands__cid_fkey" FOREIGN KEY (_cid) REFERENCES categories(_id)
    "brands__p_name_fkey" FOREIGN KEY (_p_name) REFERENCES products(_name)
    "brands__pid_fkey" FOREIGN KEY (_pid) REFERENCES products(_id)

