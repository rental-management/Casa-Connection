UPDATE work_orders 
SET (type, memo) = ($1, $2)
WHERE id = $3