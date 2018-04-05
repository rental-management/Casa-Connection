INSERT INTO tenants 
    (f_name, l_name, phone, email, emerg_contact_name, emerg_contact_phone, prop_id, user_id)
VALUES($1, $2, $3, $4, $5, $6, $7)
WHERE prop_id = $7;