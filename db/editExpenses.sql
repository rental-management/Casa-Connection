UPDATE properties
SET (assessed_value, down_payment, monthly_mortgage, monthly_dues, monthly_taxes, monthly_insurance, monthly_utilities, rent) = ($1, $2, $3, $4, $5, $6, $7, $8)
WHERE id = $9;