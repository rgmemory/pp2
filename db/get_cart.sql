select *
from nikeproducts
join nikecart on
nikeproducts.id = nikecart.product_id
where nikecart.user_id = $1;
