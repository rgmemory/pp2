import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'

import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';


export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:product_id" component={Product}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/login" component={Login}/>
    </Switch>
)