/*mysql -u root -p < schema.sql*/ 

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);