UPDATE contractors
SET (company_name, type, f_name, l_name, phone, email, city, state, zip) = ($1, $2, $3, $4, $5, $6, $7, $8, $9)
WHERE id = $10;
