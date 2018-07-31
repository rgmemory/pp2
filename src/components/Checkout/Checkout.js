import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './checkout.css'
import StripeCheckout from 'react-stripe-checkout';

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
            zip: 'Zip Code'
        }

        this.handleFirst = this.handleFirst.bind(this)
        this.handleLast = this.handleLast.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.updatePersonalInformation = this.updatePersonalInformation.bind(this)
    }

    componentDidMount(){
        axios.get('/api/getcart').then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    handleFirst(value){
        this.setState({
            first: value
        })
    }

    handleLast(value){
        this.setState({
            last: value
        })
    }

    handleAddress(value){
        this.setState({
            address: value
        })
    }

    handleCity(value){
        this.setState({
            city: value
        })
    }

    handleState(value){
        this.setState({
            state: value
        })
    }

    handleZip(value){
        this.setState({
            zip: value
        })
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: ((this.props.subtotal * 1.06) * 100)}).then(res => {
            console.log('front end token', res)
        })
    }

    updatePersonalInformation(){

        let {first, last, address, city, state, zip} = this.state

        axios.post('/api/updateuserinformation', {first, last, address, city, state, zip}).then(res => {
        })
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

                            <div className="checkout-names">
                                <div className="checkout-first"><input onChange={e => this.handleFirst(e.target.value)} type="text" value={this.state.first}/></div>
                                <div className="checkout-last"><input onChange={e => this.handleLast(e.target.value)} type="text" value={this.state.last}/></div>
                            </div>

                            <div className="checkout-address"><input onChange={e => this.handleAddress(e.target.value)} type="text" value={this.state.address}/></div>
                            
                            <div className="checkout-address-info">
                                <div className="checkout-city"><input onChange={e => this.handleCity(e.target.value)} type="text" value={this.state.city}/></div>
                                <div className="checkout-state"><input onChange={e => this.handleState(e.target.value)} type="text" value={this.state.state}/></div>
                                <div className="checkout-postal"><input onChange={e => this.handleZip(e.target.value)} type="text" value={this.state.zip}/></div>

                            </div>      

                            <div className="savecontinue">
                                <button onClick={this.updatePersonalInformation}>SAVE</button>
                            </div>                      

                        </div>

                        <div className="payment">2.PAYMENT
                            
                        </div>

                        <div className="stripe">
                            <StripeCheckout 
                                name="Nike"
                                description="Dolla Dolla Bills"
                                image="http://via.placeholder.com/100x100"
                                token={this.onToken}
                                stripeKey="pk_test_6xbuzwaF1SPcu8L2FclNKkb4"
                                amount={(this.props.subtotal * 1.06) * 100}                                
                            />
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
                                <div>${parseFloat(Math.round((this.props.subtotal) * 100) / 100).toFixed(2)}</div>
                            </div>

                            <div className="pricespacing">
                                <div className="checkout-tax">Estimated Tax</div>
                                <div>${parseFloat(Math.round((this.props.subtotal * .06) * 100) / 100).toFixed(2)}</div>
                            </div>

                            <div className="pricespacing1">
                                <div className="checkout-total">Total</div>
                                <div>${parseFloat(Math.round((this.props.subtotal * 1.06) * 100) / 100).toFixed(2)}</div>
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
