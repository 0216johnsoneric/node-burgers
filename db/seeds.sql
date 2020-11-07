/*mysql -u root -p < seeds.sql*/ 

-- DROP TABLE employees;
USE burgers_db;

INSERT INTO burgers (burger_name, devoured) 
VALUES 
('Hamburger', false),
('Cheese Burger', false),
('Garden Burger', false);
