import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleCart} from '../../ducks/reducer'
import axios from 'axios'

export class Product extends Component{
    constructor(){
        super()

        this.state = {
            size: 8
        }

        this.handleSize = this.handleSize.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

  

    handleSize(value){
        this.setState({
            size: value
        })
    }

    addToCart(id, size){
        this.props.handleCart({id, size});
        // axios.post('/api/addtocart', {id, size}).then(res => {
        //     console.log('front end fired', res)
        // })
    }


    render(){


        let product = this.props.products[this.props.match.params.product_id - 1]

        return(
            <div className="product">



                    <div>{product.name}</div>
                    <div>{product.cost}</div>
                    <div>{product.description}</div>

                    <select name="size" value={this.state.size} onChange={(e) => {this.handleSize(e.target.value)}}>
                        <option value="8">8</option>
                        <option value="8.5">8.5</option>
                        <option value="9">9</option>
                        <option value="9.5">9.5</option>
                        <option value="10">10</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                        <option value="11.5">11.5</option>
                        <option value="12">12</option>
                        <option value="12.5">12.5</option>
                        <option value="13">13</option>
                    </select>


        
      
                <button onClick={() => {this.addToCart(
                    this.props.match.params.product_id, 
                    this.state.size
                )}}>Add to Cart</button>

            </div>
        )
    }
}


const mapDispatchToProps = {
    handleCart
}

function mapStateToProps(state){
    return{
        products: state.products,
        cart: state.cart
   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)