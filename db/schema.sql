DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

USE burgers_db;
-- Use programming db for the following statements --

CREATE TABLE burgers(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
      id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "language" --
      burger_name VARCHAR(30),
      devoured boolean,		
  -- Set the id as this table's primary key
	Primary KEY(id)
);




