module.exports = {

    getproducts: function(req, res){
        req.app.get('db').get_products().then(products => {
            res.status(200).send(products)
        })
    },

    
    getproduct: function(req, res){
        req.app.get('db').get_product(req.params.id).then(product => {
            res.status(200).send(product)
        })
    },

    ////////need to figure out auth0
    addtocart: function(req, res){
        console.log('add to cart req.body', req.body.product_id, req.body.size, req.body.user_id)
        req.app.get('db').add_to_cart([req.body.user_id, req.body.product_id, req.body.size]).then(stuff => {
            req.app.get('db').get_checkout().then(cart => {
                res.status(200).send(cart)
            })
        })
    },

    getcheckout: function(req, res){
        req.app.get('db').get_checkout().then(checkout => {
            res.status(200).send(checkout)
        })
    },

    remove: function(req, res){
        console.log('req.params.product_id', req.params.id)
        req.app.get('db').remove_product([req.params.id, 2]).then(product => {
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
    }


}