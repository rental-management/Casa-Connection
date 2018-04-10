SELECT * FROM work_orders JOIN properties ON
work_orders.prop_id = properties.id 
WHERE work_orders.user_id = $1;