SELECT name,address FROM customers;
SELECT name,address FROM customers WHERE id = 1;

SELECT * FROM bookings WHERE checkin_date > '2019/10/01' AND nights >= 1;