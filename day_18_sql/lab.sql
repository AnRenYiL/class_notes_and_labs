--Lab 1
SELECT * FROM products 
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON line_items.order_id = orders.id

SELECT * FROM products
LEFT JOIN line_items ON line_items.product_id = products.id
LEFT JOIN orders ON line_items.order_id = orders.id

--Lab 2
SELECT SUM(line_items.quantity * line_items.price)
FROM line_items
INNER JOIN orders
ON orders.id = line_items.order_id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2016-01-31'
GROUP BY orders.id;

SELECT products.name, products.price
FROM products 
INNER JOIN line_items
ON line_items.product_id = products.id
INNER JOIN orders
ON orders.id = line_items.order_id
WHERE orders.completed_on > NOW()-INTERVAL '20' MONTH
ORDER BY products.price ASC
LIMIT 1;

--Lab 3
SELECT products.id,(products.remaining_quantity + SUM(quantity)) 
AS total_quantity FROM products
LEFT JOIN line_items 
ON product_id=products.id
WHERE product_id is not null
GROUP BY products.id;

SELECT AVG(total_price) FROM 
(
SELECT orders.id, SUM(quantity * price) AS total_price
FROM line_items
INNER JOIN orders
ON order_id=orders.id
GROUP BY orders.id
) AS allorders;


SELECT SUM(quantity * price)/
(SELECT COUNT(*) FROM orders)
FROM  orders
INNER JOIN line_items
ON order_id=orders.id;


SELECT SUM(quantity * price)/
 COUNT(DISTINCT(orders.id))
FROM  orders
INNER JOIN line_items
ON order_id=orders.id;

--Lab 4
SELECT products.name, orders.completed_on, orders.id FROM products 
INNER JOIN line_items
ON products.id=product_id
INNER JOIN orders
ON order_id=orders.id
WHERE completed_on > NOW()-INTERVAL '24' MONTH;

SELECT products.id, SUM(line_items.price * quantity) AS total
FROM products
INNER JOIN line_items
ON products.id=product_id
INNER JOIN orders
ON order_id=orders.id
WHERE completed_on > NOW()-INTERVAL '1' YEAR
GROUP BY products.id
ORDER BY total DESC
LIMIT 10;

SELECT products.id FROM products
WHERE products.id not in (
SELECT products.id 
FROM products
INNER JOIN line_items
ON products.id=product_id
INNER JOIN orders
ON orders.id=order_id
WHERE completed_on > NOW()-INTERVAL '24' MONTH 
);

--Average Price
--Select the average order total price for the `Lightweight Marble Gloves ? Hat` product.
SELECT SUM(line_items.price * quantity)/COUNT(order_id)
FROM products
INNER JOIN line_items
ON products.id=product_id
WHERE products.name='Lightweight Marble Hat';

--Query + Index
--Part 1
SELECT groups.id, group_name
FROM users 
INNER JOIN user_group_memberships
ON user_id=users.id
INNER JOIN groups
ON groups.id=group_id
WHERE email = '';

-- CREATE INDEX index_name ON table_name (column_name, ...)
-- INDEXes are sotred in a same area, so the name of index should be unique


--Challenge Lab
--Select all the products that weren't purchased during the last month.
SELECT products.id FROM products
WHERE products.id not in (
SELECT products.id 
FROM products
INNER JOIN line_items
ON products.id=product_id
INNER JOIN orders
ON orders.id=order_id
WHERE completed_on > NOW()-INTERVAL '1' MONTH 
);


