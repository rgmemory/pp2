import React, {Component} from 'react';
import './header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import cart from './cart.png'
import options from './options.png'

export class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="header">

                <div className="header-options">
                    <img src={options} />
                </div>
                

                <div className="header-links">
          
                    <Link to="/about"><div>ABOUT</div></Link>
                    <div><Link to="/shop">SHOP</Link></div>
                    <div><Link to="/login">LOGIN</Link></div>
             
                </div>

                <div className="cart-button">
                    <div className="cart-image"><Link to="/cart"><img  src={cart}/></Link></div>
                    <div className="cart-total">{this.props.cartSize}</div>
                    {/* <div className="cart-total">{JSON.parse(localStorage.getItem('cart')).length}</div> */}
                </div>


            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cartSize: state.cartSize
    }
}

export default connect(mapStateToProps)(Header)