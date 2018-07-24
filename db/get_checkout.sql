select *
from nikeproducts
join nikecart on
nikeproducts.id = nikecart.product_id
where nikecart.user_id = 2;



-- select nikeproducts.name, nikecart.size, nikeproducts.id
-- from nikeproducts
-- join nikecart on
-- nikeproducts.id = nikecart.product_id
-- where nikecart.user_id = $1;