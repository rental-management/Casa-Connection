INSERT INTO tenants 
    (f_name, l_name, phone, email, emerg_contact_name, emerg_contact_phone, prop_id)
VALUES($1, $2, $3, $4, $5, $6)
WHERE prop_id = $7;