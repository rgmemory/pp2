import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createSecureContext } from 'tls';

export class Cart extends Component{
    constructor(){
        super()

    }

    render(){
        console.log(this.props.cart)

        let displayCart = this.props.products.map((current, index) => {
            return(
                <div key={current + index}>
                    {current.name}
                </div>
            )
        })

        return(
            <div className="cart">
                Cart
                {displayCart}
                {/* {this.props.cart} */}
                {this.props.match.params.product_id}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart,
        products: state.products
    }
}

export default connect(mapStateToProps)(Cart)