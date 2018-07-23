module.exports = {

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
        req.app.get('db').add_to_cart([req.body.id, req.body.size, req.body.user_id]).then(stuff => {
            req.app.get('db').get_checkout(2).then(cart => {
                res.status(200).send(cart)
            })
        })
    },

    getproduct: function(req, res){
        req.app.get('db').get_product(req.params.id).then(product => {
            res.status(200).send(product)
        })
    },

    checkout: function(req, res){
        for(let i = 0; i < req.body.cart.length; i++){
            req.app.get('db').add_to_cart([req.body.cart[i].id, req.body.cart[i].size]).then(cart => {
                res.sendStatus(200)
            })
        }
    },

    getcheckout: function(req, res){
        req.app.get('db').get_checkout().then(checkout => {
            res.status(200).send(checkout)
        })
    },

    remove: function(req, res){
        req.app.get('db').remove_product(req.params.product_id).then(product => {
            res.status(200).send(product)
        })

    }
}