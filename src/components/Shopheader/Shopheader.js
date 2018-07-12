import React, {Component} from 'react'
import './shopheader.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import './shop.css'

export class Shopheader extends Component{
    constructor(){
        super()
    }

    render(){

        console.log('cart on header', this.props.cart, this.props.cart.length)
        return(
            <div className="shopheader">

                <div className="shopheader-links">
                    <div>All</div>
                    <div>Accesories</div>
                    <div>Shoes</div>
                </div>

                <div className="cart-button">
                    <Link to="/cart">CART</Link>
                    {this.props.cart.length}
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

export default connect(mapStateToProps)(Shopheader)