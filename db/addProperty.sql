INSERT INTO properties 
    (user_id, prop_name, street, city, state, zip, img, t_f_name, t_l_name, t_phone, t_email, emerg_contact_name, emerg_contact_phone)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING *;
