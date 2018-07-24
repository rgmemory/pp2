import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSubtotal, handleCartSize} from '../../ducks/reducer'
import {Link} from 'react-router-dom'
import './cart.css'
import axios from 'axios'

export class Cart extends Component{
    constructor(){
        super()

       this.state = {
           cart: [],
       }

       this.checkout = this.checkout.bind(this)
       this.remove = this.remove.bind(this)
       this.edit = this.edit.bind(this)

    }

    componentDidMount(){
        
        axios.get('/api/getcheckout').then(res => {
            console.log('checkout', res.data)

            let subtotal = 0;

            for(let i = 0; i < res.data.length; i++){
                // console.log(subtotal)
                subtotal += res.data[i].cost
            }

            // console.log(subtotal)

            this.props.handleSubtotal(subtotal)

            this.setState({
                cart: res.data
                
            })
        })
    }

    checkout(){
        console.log('checkout clicked')
    }

    remove(value){
        console.log('remove clicked', value)
        /////////////////////get the delete to work

        axios.delete(`/api/remove/${value}`).then(stuff => {
            
            axios.get('/api/getcheckout').then(res => {
                console.log(res.data, 'front end checkout', res.data.length)
                this.props.handleCartSize(res.data.length);
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
                        <div>IDIDID{current.id}</div>
                        {/* <div>UserID{current.user_id}</div> */}
                    
                        <div className="cart-product-name">{current.name}</div>
                        <div className="cart-product-size">{current.size}</div>

                            <div className="cart-product-buttons">
                                <div className="cart-product-remove"><button onClick={() => this.remove(current.id)}>REMOVE</button></div>
                                <div className="cart-product-edit"><button onClick={() => this.edit(current.id)}>EDIT</button></div>
                            </div>
                            
                    </div>

                    <div className="cart-product-cost">${current.cost}</div>
                </div>
            )
        })


        return(
            <div className="cart">
                <div className="cart-wrapper">

                    <div className="cart-left">
                        <div className="cart-left-deal">
                            <p>$5 TWO DAY SHIPPING AVAILABLE FOR NIKEPLUS MEMBERS.</p>

                        </div>
                        <div className="cart-your-cart">
                            <p>YOUR CART ({this.props.cartSize})</p>
                        </div>
                        
                        <div className="cart-items">
                            <div>{displayCart}</div>
                        </div>
                    </div>
                    
                    <div className="cart-right">
                        <div className="cart-summary">
                    
                            <div>SUMMARY</div>
                            
                            
                            <div>SUBTOTAL: ${this.props.subtotal}</div>
                            <div>ESITMATED TAXES: ${this.props.subtotal * .06}</div>

                            <div>TOTAL: ${this.props.subtotal * 1.06}</div>

                            <Link to="/login" onClick={this.checkout}>CHECKOUT</Link>
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
        subtotal: state.subtotal
    }
}

const mapDispatchToProps = {
    handleSubtotal,
    handleCartSize
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)