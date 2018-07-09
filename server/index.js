const controller = require('./controller')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config()

//surfusers
//surfproducts
//surfjunction


app.listen(3005, function(){
    console.log('working on 3000')
})

app.get('/api/get', controller.test);


