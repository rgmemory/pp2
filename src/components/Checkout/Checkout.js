import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './checkout.css'

export class Checkout extends Component{
    constructor(){
        super()

        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        axios.get('/api/getcheckout').then(res => {
            console.log('checklist', res.data)
            this.setState({
                cart: res.data
            })
        })
    }

    render(){

        let checkoutItems = this.state.cart.map((current, index) => {
            return(
                <div key={current + index}>
                    {current.name}
                    {current.cost}
                    {current.image}
                    NEWITEM
                </div>
            )
        })
        
        return(
            <div className="checkout">

                    <div className="checkout-title"><h1>CHECKOUT</h1></div>

                <div className="checkout-body">

                    <div className="checkout-left">

                        <div className="checkout-shipping"><p>1.SHIPPING</p></div>

                        <div className="checkout-left-body">

                        
                            <div className="checkout-names">
                                <div className="checkout-first"><input type="text" value="First"/></div>
                                <div className="checkout-last"><input type="text" value="Last"/></div>
                            </div>

                            <div className="checkout-address"><input type="text" value="Address"/></div>
                            
                            <div className="checkout-address-info">
                                <div className="checkout-city"><input type="text" value="City"/></div>
                                <div className="checkout-state"><input type="text" value="State"/></div>
                                <div className="checkout-postal"><input type="text" value="Postal Code"/></div>

                            </div>                            

                        </div>

                        <div className="payment">2.PAYMENT
                            
                        </div>

                    </div>

                    <div className="checkout-right">
                        <div className="checkout-summary"><p>SUMMARY</p></div>
                            
                            <div>Subtotal {this.props.subtotal}</div>
                            <div>Estimated Tax {this.props.subtotal * .06}</div>
                            <div>Total {this.props.subtotal * 1.06}</div>
                        
                        <div className="checkout-incart">
                        
                            <p>IN YOUR CART</p>
                        
                        </div>
                            {checkoutItems}
                    </div>
                </div>
            
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        subtotal: state.subtotal,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Checkout)
