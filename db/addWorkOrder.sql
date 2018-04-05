INSERT INTO work_orders
    (prop_id, type, memo)
VALUES ( $1, $2, $3)
RETURNING *;