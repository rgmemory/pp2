module.exports = {
    // getusers: function(req, res){

    //     req.app.get('db').get_users().then(users => {
    //         // console.log('users', users);
    //     })
    // },

    getproducts: function(req, res){
        req.app.get('db').get_products().then(products => {
            res.status(200).send(products)
        })
    },

    getfiltered: function(req, res){
        req.app.get('db').get_filtered(req.body.filter).then(cart => {
            res.status(200).send(cart)
        })
    },

    addtocart: function(req, res){
        console.log(req.body, 'req.body')
        req.app.get('db').add_to_cart([req.body.product_id, req.body.size]).then(cart => {
            console.log('backend cart', cart)
        })
    },

    getproduct: function(req, res){
        console.log('backend product', req.params)

        req.app.get('db').get_product(req.params.id).then(product => {
            console.log(product)

            res.status(200).send(product)
        })
    }
}