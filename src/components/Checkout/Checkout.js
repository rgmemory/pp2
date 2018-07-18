import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Checkout extends Component{
    constructor(){
        super()

    }

    render(){

        console.log('total', this.props.total)

        let checkoutItems = this.props.cart.map((current, index) => {
            return(
                <div key={current + index}>
                    {current.image}
                    {current.name}
                    {current.cost}
                    NEWITEM
                </div>
            )
        })
        
        return(
            <div className="checkout">
            checkout

            <div>1.SHIPPING</div>
            <div>2.PAYMENT</div>

            <div>SUMMARY
                <div>Subtotal {this.props.subtotal}</div>
                <div>Estimated Tax {this.props.subtotal * .06}</div>
                <div>Total {this.props.subtotal * 1.06}</div>
            </div>
            <div>IN YOUR CART</div>
                {checkoutItems}
                
               
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        subtotal: state.total,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout)
