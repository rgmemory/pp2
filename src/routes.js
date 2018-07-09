import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'

import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';


export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product" component={Product}/>
        <Route path="/shop" component={Shop}/>
    </Switch>
)