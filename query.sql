SELECT DISTINCT
    u.name,
    u.email
FROM users u
JOIN orders o 
ON u.id = o.user_id
WHERE o.order_total > 100;
