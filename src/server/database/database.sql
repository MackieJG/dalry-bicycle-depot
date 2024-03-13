CREATE DATABASE DalryDepot


CREATE TABLE Customers(
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255)
);