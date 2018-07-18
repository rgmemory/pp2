import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleTotal} from '../../ducks/reducer'
import './cart.css'

export class Cart extends Component{
    constructor(){
        super()

       this.state = {
           productArray: [],
           subtotal: 0,
           taxes: 0,
           total: 0
       }
    }

    componentDidMount(){
        let tempArray = [];
        let subtotal = 0;
        let taxes = 0;
        let total = 0;

        let {products, cart} = this.props

        for(let i = 0; i < products.length; i++){

            for(let j = 0; j < cart.length; j++){
                if(products[i].id == cart[j].id){
                    products[i].size = cart[j].size
                    tempArray.push(products[i])
                    subtotal += products[i].cost;
                }
            }
        }

        taxes = subtotal * .06;
        total = subtotal * 1.06;

        this.setState({
            productArray: tempArray,
            subtotal,
            taxes,
            total
        })

        this.props.handleTotal(this.state.total)
    }

    render(){
        console.log('cart', this.props.cart)
        console.log('total', this.state.subtotal)

        // let displayCart = this.props.cart.map((current, index) => {
        //     return(
        //         <div key={current + index}>
        //             {this.props.products[]}
        //             {current.size}
        //             {current.id}
        //         </div>
        //     )
        // })

        let displayCart = this.state.productArray.map((current, index) => {
            return(
                <div className="cart-product" key={current + index}>
                    <div className="cart-product-image"><img src={current.image}></img></div>
                    
                    <div className="cart-product-middle">
                        <div className="cart-product-name">{current.name}</div>
                        <div className="cart-product-size">{current.size}</div>

                            <div className="cart-product-buttons">
                                <div className="cart-product-remove"><button>REMOVE</button></div>
                                <div className="cart-product-edit"><button>EDIT</button></div>
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
                            <button>See Details</button>
                            <button>Become a Member</button>

                        </div>
                        <div className="cart-your-cart">
                            <p>YOUR CART ({this.props.cart.length})</p>
                        </div>
                        
                        <div className="cart-items">
                            <div>{displayCart}</div>
                        </div>
                    </div>

                    {/* <div className="cart-right"> */}
                    
                    <div className="cart-right">
                        <div className="cart-summary">
                    
                            <div>SUMMARY</div>
                            <div>SUBTOTAL: ${this.state.subtotal}</div>
                            <div>ESITMATED TAXES: ${this.state.taxes}</div>

                            <div>TOTAL: ${this.state.total}</div>

                            <Link to="/login" onClick={ () => {this.props.handleTotal(this.state.subtotal)}}>CHECKOUT</Link>
                        </div>
                    </div>

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
    handleTotal
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)