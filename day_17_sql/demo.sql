--SQL: Basics

--To connect to a database through terminal we use the command
-- psql -d database_name

--To execute this file, do:
--psql -d <database-name> < demo.sql

--Create Table
--SQL Conventions:
--When ever you r using sql keywords, they should be in all caps
--keywords: (CREATE TABLE, SELECT, INNER JOIN)

CREATE TABLE cars(
    -- define a column id with the type of BIGSERIAL
    -- SERIAL will auto increment new records
    id BIGSERIAL,
    -- VARCHAR is a string type where characters are limited to the argument
    brand VARCHAR(50),
    model VARCHAR(50),
    -- INTEGER is a number type that cant have decimals, but can be negative
    doors INTEGER,
    -- TEXT id s string type with no max character count
    description Text
);
--All SQL Statements must end in a semicolon(;)

INSERT INTO students ("first_name", last_name, email, phone_number)
VALUES ('Mao', 'Li', 'anrenyil@gmail.com', '7782885117');

-- we can add multiple records in the same transaction by seperating the sets of values by commas
INSERT INTO cars (brand, model, doors, description)
VALUES ('CCC', 'DDD', 2, 'lalalal'),('CCC', 'DDD', 2, 'lalalal');

--To read 
-- Read all columns from students
-- * means everything
SELECT * FROM students;
--We can specify the columns that we want seperated by commas

--WHERE
--we can use the WHERE clause to filter results depending on an argument

SELECT first_name,last_name FROM students WHERE age>20;
SELECT id,first_name,last_name,registration_date FROM students WHERE registration_date > NOW()-INTERVAL '360' DAY;
SELECT id,first_name,last_name FROM students WHERE age>20 and age<40;

SELECT id,first_name,last_name FROM students WHERE (id>20 AND id<40) OR id=1;

-- NULL and NOT NULL
    SELECT id, first_name,age from students where age IS NULL;
-- LIKE and ILIKE
-- ILIKE is not case sensitive, LIKE is
SELECT id, first_name,age from students where first_name ILIKE 'jo%';
SELECT id, first_name,age from students where first_name LIKE 'Jo%';

--BETWEEN
SELECT id,first_name,last_name,registration_date FROM students WHERE AGE BETWEEN 18 AND 21;

--ORDER BY
--LIMIT
--OFFSET
SELECT id,first_name,last_name,registration_date FROM students WHERE AGE BETWEEN 18 AND 21 ORDER BY id DESC;

-- use LIMIT to return only a set amout of records
SELECT id,first_name,last_name,registration_date FROM students WHERE AGE BETWEEN 18 AND 21 ORDER BY id DESC LIMIT 10;

-- use OFFSET to return the second set of a limited amount
SELECT id,first_name,last_name,registration_date FROM students WHERE AGE BETWEEN 18 AND 21 ORDER BY id DESC LIMIT 10 OFFSET 10;

-- FUNCTIONS
-- COUNT returns the number of records in the result

SELECT COUNT(*) FROM students;
-- ROUND, AVG
-- Average age of all the students rounded to the nearest number
SELECT ROUND(AVG(age)) FROM students;
--SUM
--MIN
--MAX

-- AS allows us to create aliases for certain results
--GROUP BY 
SELECT COUNT(*) AS occurences ,last_name FROM students
GROUP BY last_name
ORDER BY occurences;

-- UPDATE
-- Always provide a where clause
-- use UPDATE to modify a record
-- RETURNING displays the records that were changed from the query
UPDATE students SET first_name='Mao' WHERE id=501 RETURNING first_name;



-- DELETE
-- user DELETE to remove a record from a table;
-- Always provide a where clause or else everything will get deleted

DELETE FROM students WHERE id=501 RETURNING *;





