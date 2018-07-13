module.exports = {
    getusers: function(req, res){
        console.log('test works')

        req.app.get('db').get_users().then(users => {
            // console.log('users', users);
        })
    },

    getproducts: function(req, res){
        req.app.get('db').get_products().then(products => {
            console.log('products', products)

            res.status(200).send(products)
        })
    },

    getfiltered: function(req, res){
        console.log('req.body', req.body.filter)
        req.app.get('db').get_filtered(req.body.filter).then(cart => {
            console.log('backend cart', cart)
            res.status(200).send(cart)
        })
    },

    addtocart: function(req, res){
        console.log('req.body', req.body.id, req.body.size)
        // req.app.get('db').add_to_cart().then(cart => {
        //     console.log('backend cart', cart)
        // })
    }
}