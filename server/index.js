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

let {
    CONNECTION_STRING
} = process.env

const app = express();
app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db)
})



app.listen(3005, function(){
    console.log('working on 3000')
})

// app.get('/api/get', controller.getusers)

app.get('/api/getproducts', controller.getproducts)
app.get('/api/getproduct/:id', controller.getproduct)

app.post('/api/getfiltered', controller.getfiltered)

app.post('/api/addtocart', controller.addtocart)




