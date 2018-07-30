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

    addtocart: function(req, res){
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

            res.status(200).send(cart)
        })

    },

    getcartsize: function(req, res){

        req.app.get('db').get_cart_size(req.user[0].id).then(cart => {
            res.status(200).send(cart[0].count)
        })
    }, 

    payment: function(req, res){

        res.sendStatus(200);
    },

    getedit: function(req, res){
        req.app.get('db').get_edit(req.params.id).then(item => {

            res.status(200).send(item)
        })
    },

    updatesize: function(req, res){
        console.log('req.body', req.body)
        req.app.get('db').update_size([req.body.size, req.body.id]).then(item => {
            res.status(200).send(item)
        })
    },

    updateuserinformation: function(req, res){
        console.log("user info", req.body)

        let {first, last, address, city, state, zip} = req.body

        req.app.get('db').update_user_info([first, last, address, city, state, zip]).then(result => {
            console.log('user info updated')
        })
    }


}