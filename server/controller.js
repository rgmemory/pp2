module.exports = {
    getusers: function(req, res){
        console.log('test works')

        req.app.get('db').get_surfusers().then(users => {
            console.log('users', users);
        })
    },

    getproducts: function(req, res){
        req.app.get('db').get_products().then(products => {
            console.log('products', products)

            res.status(200).send(products)
        })
    }
}