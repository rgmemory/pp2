const controller = require('./controller')
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')


const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session')
require('dotenv').config()

//nikeusers
//nikeproducts
//nikecart
//nikecustomers

var stripe = require("stripe")("sk_test_agkHO99WVkWu6hDrSPZqkZJz");

const charge = stripe.charges.create({
  amount: 999,
  currency: 'usd',
  source: 'tok_visa',
  receipt_email: 'jenny.rosen@example.com',
});

let {
    SESSION_SECRET,
    CONNECTION_STRING,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    FRONTEND_DOMAIN
} = process.env

const app = express();

app.use(express.static(__dirname+'/../build'))

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile email'
}, function(accessToken, refreshToken, extraParams, profile, done){
    app.get('db').check_user([profile.id]).then(user => {
        if(user[0]){      
            done(null, user[0])
        }else{
            app.get('db').register_user([profile.id, profile.name.givenName, profile.name.familyName]).then(user => {
                done(null, user[0])
            }) 
        }
    })    
}))

passport.serializeUser(function(user, done){
    done(null, user.id)
})

passport.deserializeUser(function(id, done){  
    app.get('db').read_user([id]).then(user => {
        done(null, user); 
    })
})

app.get('/login', passport.authenticate('auth0', {
    successRedirect:    `${process.env.FRONTEND_DOMAIN}/#/shop`,
    failureRedirect: `${process.env.FRONTEND_DOMAIN}/#/userlogin`
}))

app.get('/auth/me', function(req, res){
    if(req.user){
            res.status(200).send(req.user)
    }else{
        res.status(401).send('nice try sucka')
    }
})

app.listen(3005, function(){
    console.log('working on 3000')
})

app.get('/api/getproducts', controller.getproducts)

app.get('/api/getproduct/:id', controller.getproduct)

app.post('/api/addtocart', controller.addtocart)

app.get('/api/getcheckout', controller.getcheckout)

app.delete('/api/remove/:id', controller.remove)

app.get('/api/getcart', controller.getcart)

app.post('/api/getfiltered', controller.getfiltered)

app.get('/api/getcartsize', controller.getcartsize)

app.post('/api/payment', controller.payment)

app.get('/api/getedit/:id', controller.getedit)

app.put('/api/updatesize', controller.updatesize)

app.post('/api/updateuserinformation', controller.updateuserinformation)

app.post('/api/payment', controller.handlePayment)



