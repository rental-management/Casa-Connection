INSERT INTO properties 
    (user_id, prop_name, street, city, state, zip, img)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;