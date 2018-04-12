UPDATE properties 
SET 
assessed_value = $1,
down_payment = $2,
monthly_mortgage = $3,
monthly_dues = $4, 
monthly_taxes = $5, 
monthly_insurance = $6, 
monthly_utilities = $7,
rent = $8
WHERE id = $9;
