module.exports = {

    getproducts: function(req, res){
        req.app.get('db').get_products().then(products => {
            res.status(200).send(products)
        })
        console.log('req.user', req.user[0])
    },

    
    getproduct: function(req, res){
        req.app.get('db').get_product(req.params.id).then(product => {
            res.status(200).send(product)
        })
    },

    addtocart: function(req, res){
        console.log('add to cart req.body', req.user[0].id, req.body.product_id, req.body.size)
        req.app.get('db').add_to_cart([req.user[0].id, req.body.product_id, req.body.size]).then(stuff => {
            res.sendStatus(200);
        })
    },

    getcheckout: function(req, res){
        req.app.get('db').get_checkout().then(checkout => {
            res.status(200).send(checkout)
        })
    },

    remove: function(req, res){
        console.log('req.params.product_id', req.params.id)
        req.app.get('db').remove_product(req.params.id).then(product => {
            res.status(200).send(product)
        })

    },


    ////////

    getfiltered: function(req, res){
        req.app.get('db').get_filtered(req.body.filter).then(cart => {
            res.status(200).send(cart)
        })
    },


    checkout: function(req, res){
        for(let i = 0; i < req.body.cart.length; i++){
            req.app.get('db').add_to_cart([req.body.cart[i].id, req.body.cart[i].size]).then(cart => {
                res.sendStatus(200)
            })
        }
    },

    getcart: function(req, res){
        req.app.get('db').get_cart(req.user[0].id).then(cart => {
            console.log('cart', cart)

            res.status(200).send(cart)
        })

    },

    getcartsize: function(req, res){
        console.log('get cart size works', req.user[0].id)

        req.app.get('db').get_cart_size(req.user[0].id).then(cart => {
            console.log('cart total', cart.count)
            res.status(200).send(cart[0].count)
        })
    }


}