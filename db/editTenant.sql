UPDATE properties
SET(t_f_name, t_l_name, t_phone, t_email, emerg_contact_name, emerg_contact_phone) = ($1, $2, $3, $4, $5, $6)
WHERE id = $7;