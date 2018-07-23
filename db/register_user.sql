insert into nikeusers (auth_id, first, last)
values ($1, $2, $3)
returning *;