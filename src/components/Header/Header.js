import React, {Component} from 'react';
import './header.css'
import {Link} from 'react-router-dom'

export default class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="header">

                <div className="header-logo">
                    <Link to="/">
                        <h1>salt</h1>
                        <h1>surf</h1>
                    </Link>
                </div>

                <div className="header-links">
          
                    <Link to="/about"><div>ABOUT</div></Link>
                    <div><Link to="/surf">SURF</Link></div>
                    <div><Link to="/shop">SHOP</Link></div>
                    <div><Link to="/login">LOGIN</Link></div>
             
                 
                </div>


            </div>
        )
    }
}