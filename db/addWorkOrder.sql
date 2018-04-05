INSERT INTO work_orders
    (prop_id, type, memo, user_id)
VALUES ( $1, $2, $3, $4)
RETURNING *;