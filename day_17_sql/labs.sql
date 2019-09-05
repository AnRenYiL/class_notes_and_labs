-- FIRST Lab
INSERT INTO products 
(name, description, price, sale_price,remaining_quantity)
VALUES 
('Premium Rustic Aluminum Gloves','Extra amazing gloves',100,75,40);
SELECT * FROM products WHERE name='Premium Rustic Aluminum Gloves';
UPDATE products SET remaining_quantity=39 WHERE id= 476 RETURNING *;
DELETE FROM products WHERE id=476;
SELECT COUNT(*) FROM products;


--SECOND Lab
INSERT INTO students 
(first_name, last_name, Age, email,registration_date,phone_number)
VALUES 
('John','Smith',45,'john@smith.com','2016-01-01','778.778.7787');
SELECT * FROM students WHERE email='john@smith.com';
UPDATE students SET age=50 WHERE id= 502 RETURNING *;
DELETE FROM products WHERE id=502;


--THIRD Lab
--Q1
SELECT * FROM students WHERE age BETWEEN 35 AND 45 LIMIT 10;
SELECT * FROM students WHERE age > 25 AND first_name ILIKE 'le%' ORDER BY id ASC , first_name DESC LIMIT 10 OFFSET 20;
SELECT * FROM students WHERE age IS NOT NULL ORDER BY age DESC LIMIT 10;
SELECT * FROM students WHERE age=45 AND last_name ILIKE '%n%';
--Q2
--on sale price != sale_price or price > sale_price
SELECT * FROM products WHERE price != sale_price;
SELECT * FROM products WHERE price != sale_price AND (remaining_quantity IS NOT NULL OR remaining_quantity !=0) ORDER BY sale_price ASC;
SELECT * FROM products WHERE price BETWEEN 25 AND 50 AND price != sale_price;



--Fourth Lab
--Q1
-- SELECT (sale_price * remaining_quantity) AS val, * FROM products ORDER BY val DESC  LIMIT 1;
SELECT * FROM products ORDER BY (sale_price * remaining_quantity) DESC  LIMIT 1;
--Q2
SELECT (sale_price * remaining_quantity) as val,* FROM products WHERE sale_price BETWEEN 25 AND 50 ORDER BY val DESC LIMIT 1;
--Q3
SELECT * FROM products WHERE price != sale_price AND (remaining_quantity IS NOT NULL OR remaining_quantity !=0) ORDER BY price, name;
--Q4
SELECT * FROM products WHERE price != sale_price AND (remaining_quantity IS NOT NULL OR remaining_quantity !=0) ORDER BY price, name LIMIT 20 OFFSET 20;
--Q5
SELECT AVG(price) FROM products;
--Q6
SELECT AVG(sale_price) FROM products WHERE price != sale_price;
--Q7
SELECT AVG(price) FROM products WHERE price != sale_price AND (remaining_quantity IS NOT NULL OR remaining_quantity !=0);
--Q8
UPDATE products SET remaining_quantity=0 WHERE name ILIKE '%paper%';
--Q9
UPDATE products SET remaining_quantity=floor(random()*(26-5)+5) WHERE name ILIKE '%paper%' OR name ILIKE '%steel%' RETURNING *;
SELECT * FROM products WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';
--Q10
SELECT * FROM products WHERE remaining_quantity IS NOT NULL OR remaining_quantity !=0 ORDER BY price LIMIT 10 OFFSET 10;
--Q11
SELECT COUNT(*) product_count, sale_price, SUM(remaining_quantity) remaining_quantity FROM products
GROUP BY sale_price 
--Q12
-- SELECT price FROM products ORDER BY price DESC LIMIT 1;
UPDATE products SET remaining_quantity = remaining_quantity*2 WHERE price =(SELECT price FROM products ORDER BY price DESC LIMIT 1);


--Fifth Lab
SELECT COUNT(*) FROM students WHERE first_name='Elinore';
SELECT COUNT(*), first_name from students GROUP BY first_name HAVING COUNT(*)>1;
SELECT COUNT(*), first_name from students GROUP BY first_name HAVING COUNT(*)>1 ORDER BY COUNT(*) DESC, first_name ASC LIMIT 20 ;

SELECT * FROM products ORDER BY price DESC LIMIT 1;
SELECT * FROM products WHERE price != sale_price ORDER BY price ASC LIMIT 1;
SELECT SUM(sale_price*remaining_quantity) FROM products;