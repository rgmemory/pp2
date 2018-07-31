import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSubtotal, handleCartSize, handleShoeSize, handleeditCart} from '../../ducks/reducer'
import {Link} from 'react-router-dom'
import './cart.css'
import axios from 'axios'
import Editmodal from '../Editmodal/Editmodal'

export class Cart extends Component{
    constructor(){
        super()

       this.state = {
           cart: [],
           showModal: false
       }

       this.checkout = this.checkout.bind(this)
       this.remove = this.remove.bind(this)
       this.edit = this.edit.bind(this)
       this.updateCart = this.updateCart.bind(this)
    }

    componentDidMount(){
        axios.get('/api/getcart').then(res => {
            let subtotal = 0;

            for(let i = 0; i < res.data.length; i++){
                subtotal += res.data[i].cost;
            }

            this.props.handleSubtotal(subtotal)

            this.setState({
                cart: res.data
            })
        })
    }

    checkout(){
        console.log('checkout clicked')
    }

    showModal = (value) => {
        axios.get(`/api/getedit/${value}`).then(res => {
            this.props.handleeditCart(res.data[0])
        })

        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.props.handleeditCart([{}])

        this.setState({
            showModal: false
        })

    }

    updateCart(){
        console.log('cart udpated')

        axios.get('/api/getcart').then(res => {
            console.log('cart get mount', res.data)

            let subtotal = 0;

            for(let i = 0; i < res.data.length; i++){
                subtotal += res.data[i].cost;
            }

            this.props.handleSubtotal(subtotal)

            this.setState({
                cart: res.data
            })
        })
    }

    remove(value){
        axios.delete(`/api/remove/${value}`).then(stuff => {
            
            axios.get('/api/getcart').then(res => {

                let subtotal = 0;

                for(let i = 0; i < res.data.length; i++){
                    subtotal += res.data[i].cost;
                }

                this.props.handleSubtotal(subtotal)

                this.props.handleCartSize(res.data.length)
    
                this.setState({
                    cart: res.data
                })
            })
        })
    }

    edit(value){
        console.log('edit clicked', value)
    }

    render(){       

        let displayCart = this.state.cart.map((current, index) => {
            return(
                <div className="cart-product" key={current + index}>
                    {/* <div className="cart-product-image"><img src={current.id}></img></div> */}
                    <div className="cart-product-image"><img src={current.image}></img></div>
                    
                    <div className="cart-product-middle">
                        {/* <div>{current.id}</div> */}
                    
                        <div className="cart-product-name">{current.name}</div>
                        <div className="cart-product-name">{current.type}</div>
                        <div className="cart-product-size">Size: {current.size}</div>

                            <div className="cart-product-buttons">
                                <div className="cart-product-remove"><button onClick={() => this.remove(current.id)}>REMOVE</button></div>
                                <div className="cart-product-edit"><button onClick={() => this.showModal(current.id)}>EDIT</button></div>
                            </div>
                    </div>

                    <div className="cart-product-cost">${current.cost}</div>
                </div>
            )
        })

        // console.log('props.cart', this.props.cart)

        return(
            <div className="cart">

            {/* <button onClick={this.showModal}>Show Modal</button> */}
        
            {
                this.state.showModal &&
                <Editmodal close={this.closeModal} updateCart={this.updateCart}/>
            }

                <div className="cart-wrapper">

                    <div className="cart-left">
                        <div className="cart-left-deal">
                            <p>$5 TWO DAY SHIPPING AVAILABLE FOR NIKEPLUS MEMBERS.</p>

                        </div>
                        <div className="cart-your-cart">
                            <p>YOUR CART ( {this.props.cartSize} )</p>
                        </div>
                        
                        <div className="cart-items">
                            <div>{displayCart}</div>
                        </div>
                    </div>
                    
                    <div className="cart-right">
                        <div className="cart-summary">
                    
                            <div className="cart-summary-title">SUMMARY</div>
                            
                            <div className="pricespacing cart-underline">
                                <div className="cart-subtotal">Subtotal</div>
                                <div>${parseFloat(Math.round((this.props.subtotal) * 100) / 100).toFixed(2)}</div>
                            </div>

                            <div className="pricespacing cart-underline">
                                <div className="cart-tax">Estimated Tax</div>
                                <div>${parseFloat(Math.round((this.props.subtotal * .06) * 100) / 100).toFixed(2)}</div>
                            </div>

                            <div className="pricespacing">
                                <div className="cart-total1">Total</div>
                                <div>${parseFloat(Math.round((this.props.subtotal * 1.06) * 100) / 100).toFixed(2)}</div>
                            </div>

                            <div className="cart-checkout"><Link to="/checkout"> <button> Checkout </button> </Link></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cartSize: state.cartSize,
        subtotal: state.subtotal,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    handleSubtotal,
    handleCartSize,
    handleShoeSize,
    handleeditCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)