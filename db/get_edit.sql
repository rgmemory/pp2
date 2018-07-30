select *
from nikeproducts
join nikecart on
nikeproducts.id = nikecart.product_id
where nikecart.id = $1;
