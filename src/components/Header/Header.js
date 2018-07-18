import React, {Component} from 'react';
import './header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import swoosh from './swoosh.png'
import cart from './cart.png'



export class Header extends Component{
    constructor(){
        super()
    }

    render(){
        console.log('cart on header', this.props.cart.length, this.props.cart)
        return(
            <div className="header">

            {/* {this.props.cart} */}

                <div className="header-logo">
                    <Link to="/">
                        <img src={swoosh} />
                    </Link>
                </div>

                <div className="header-links">
          
                    <Link to="/about"><div>ABOUT</div></Link>
                    <div><Link to="/shop">SHOP</Link></div>
                    <div><Link to="/login">LOGIN</Link></div>
             
                 
                </div>

                <div className="cart-button">
                    <Link to="/cart"><img src={cart}/></Link>
                    <div className="cart-total">{this.props.cart.length}</div>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header)