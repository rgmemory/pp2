import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCart} from '../../ducks/reducer'
export class Cart extends Component{
    constructor(){
        super()

    }

    
    render(){
        console.log('cart', this.props.cart)

        let tempArray = [];

        let {products, cart} = this.props

        for(let i = 0; i < products.length; i++){
            // console.log('products', products[i])
            
            for(let j = 0; j < cart.length; j++){
                // console.log('products', products[j])
                if(products[i].id == cart[j].id){

                    console.log('cart', cart[j], 'product', products[i])
                    products[i].size = cart[j].size
                    tempArray.push(products[i])
                }
            }
        }

        let displayCart = tempArray.map((current, index) => {
            return(
                <div key={current + index}>
                    {current.name}
                    {current.cost}
                    {current.size}
                    <button onClick={() => {this.props.removeCart(current.id)}}>REMOVE</button>
                    <button>EDIT</button>
                </div>
            )
        })

        console.log(tempArray)

        return(
            <div className="cart">
                
                
                <div className="cart-items">
                    {displayCart}
                </div>

                <div className="cart-summary">
                    SUBTOTAL: 
                    TAXES:

                    <Link to="/login">CHECKOUT</Link>
                </div>
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

const mapDispatchToProps = {
    removeCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)