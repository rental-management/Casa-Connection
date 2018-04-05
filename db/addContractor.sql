INSERT INTO contractors
    (user_id, company_name, type, f_name, l_name, phone, email, street, city, state, zip)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING *;