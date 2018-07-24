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


//integer doesn't have decimal in sql perhaps use a float
///////solve the number reporting on the header. Make sure it doesn't just use redux. update redux whenever a cart change is made

/////why is my cart giving me an error about violating the foreing key constraint.

/////add a column like men's running shoe to the type

///all caps the product names
let {
    SESSION_SECRET,
    CONNECTION_STRING,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL
} = process.env

const app = express();
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
    successRedirect: 'http://localhost:3000/#/checkout',
    failureRedirect: 'http://localhost:3000/#/login'
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



// app.get('/api/get', controller.getusers)


app.post('/api/getfiltered', controller.getfiltered)





// app.post('/api/checkout', controller.checkout)




