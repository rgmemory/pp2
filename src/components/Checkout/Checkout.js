import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './checkout.css'

export class Checkout extends Component{
    constructor(){
        super()

        this.state = {
            cart: [],
            first: 'First',
            last: 'Last',
            address: 'Address',
            city: 'City', 
            state: 'State',
            zip: null
        }

        this.handleFirst = this.handleFirst.bind(this)
        this.handleLast = this.handleLast.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
    }

    componentDidMount(){
        axios.get('/api/getcart').then(res => {
            console.log('checklist', res.data)
            this.setState({
                cart: res.data
            })
        })
    }

    handleFirst(value){
        console.log(value)
    }

    handleLast(value){
        console.log(value)
    }

    handleAddress(value){
        console.log(value)
    }

    handleCity(value){
        console.log(value)
    }

    handleState(value){
        console.log(value)
    }

    handleZip(value){
        console.log(value)
    }

    render(){

        let checkoutItems = this.state.cart.map((current, index) => {
            return(
                <div className="checkout-items" key={current + index}>
                    
                    <div className="checkout-items-image" ><img src={current.image}></img></div>
                    
                    <div className="lower-two">
                        <div className="checkout-items-name" >{current.name}</div>
                        <div className="checkout-items-cost" >${current.cost}</div>
                    </div>
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



                            {/* fix the values on the inputs */}
                            <div className="checkout-names">
                                <div className="checkout-first"><input onChange={e => this.handleFirst(e.target.value)} type="text" /></div>
                                <div className="checkout-last"><input onChange={e => this.handleLast(e.target.value)} type="text" value="Last"/></div>
                            </div>

                            <div className="checkout-address"><input onChange={e => this.handleAddress(e.target.value)} type="text" value="Address"/></div>
                            
                            <div className="checkout-address-info">
                                <div className="checkout-city"><input onChange={e => this.handleCity(e.target.value)} type="text" value="City"/></div>
                                <div className="checkout-state"><input onChange={e => this.handleState(e.target.value)} type="text" value="State"/></div>
                                <div className="checkout-postal"><input onChange={e => this.handleZip(e.target.value)} type="text" value="Postal Code"/></div>

                            </div>      

                            <div className="savecontinue">
                                <button>SAVE & CONTINUE</button>
                            </div>                      

                        </div>

                        <div className="payment">2.PAYMENT
                            
                        </div>

                    </div>

                    <div className="checkout-right">
                        <div className="checkout-summary">
                        
                            <div className="title">
                                <p>SUMMARY</p>
                            </div>
                            
                            <div className="checkout-prices">

                            <div className="pricespacing">
                                <div className="checkout-subtotal">Subtotal</div>
                                <div>${this.props.subtotal}</div>
                            </div>

                            <div className="pricespacing">
                                <div className="checkout-tax">Estimated Tax</div>
                                <div>${this.props.subtotal * .06}</div>
                            </div>

                            <div className="pricespacing1">
                                <div className="checkout-total">Total</div>
                                <div>${this.props.subtotal * 1.06}</div>
                            </div>
                        </div>


                        <div className="checkout-incart">
                        
                            <div className="in-title">
                                <p>IN YOUR CART</p>
                            </div>                       

                            <div className="checkout-items-below">
                                {checkoutItems}
                            </div>
                            
                        </div>
                        
                        
                            
                    </div>
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
