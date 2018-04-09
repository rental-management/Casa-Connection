UPDATE contractors
SET (f_name, l_name, phone, email, street, city, state, zip) = ($1, $2, $3, $4, $5, $6, $7, $8)
WHERE id = $9;
