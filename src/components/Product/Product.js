import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleCart} from '../../ducks/reducer'
import axios from 'axios'
import './product.css'

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
        console.log('value', value)
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
                <div className="product-wrapper">

                    <div className="product-images">
                        <img src={product.image}/>
                        <img src={product.image}/>
                        <img src={product.image}/>
                        <img src={product.image}/>
                    </div>

                    <div className="product-info">
                        <div className="product-info-top">
                            <div className="product description">TYPE{product.description}</div>
                            <div className="product-cost">${product.cost}</div>
                        </div>
                            <div className="product-name">{product.name}</div>

                    
                        <div className="product-choose-size">
                            <p>CHOOSE SIZE</p>
                        </div>
                    <div className="product-size">

                        <button onClick={() => {this.handleSize(7)}}>7</button>
                        <button onClick={() => {this.handleSize(7.5)}}>7.5</button>
                        <button onClick={() => {this.handleSize(8)}}>8</button>
                        <button onClick={() => {this.handleSize(8.5)}}>8.5</button>
                        <button onClick={() => {this.handleSize(9)}}>9</button>
                        <button onClick={() => {this.handleSize(9.5)}}>9.5</button>
                        <button onClick={() => {this.handleSize(10)}}>10</button>
                        <button onClick={() => {this.handleSize(10.5)}}>10.5</button>
                        <button onClick={() => {this.handleSize(11)}}>11</button>
                        <button onClick={() => {this.handleSize(11.5)}}>11.5</button>
                        <button onClick={() => {this.handleSize(12)}}>12</button>
                        <button onClick={() => {this.handleSize(12.5)}}>12.5</button>
                        <button onClick={() => {this.handleSize(13)}}>13</button>
                        <button onClick={() => {this.handleSize(14)}}>14</button>
                        <button onClick={() => {this.handleSize(15)}}>15</button>
                 
                        {/* <select name="size" value={this.state.size} onChange={(e) => {this.handleSize(e.target.value)}}>
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
                        </select>   */}
                    </div>     

                    <div className="product-add-cart"> 
        
                        <button onClick={() => {this.addToCart(
                            this.props.match.params.product_id, 
                            this.state.size
                        )}}>ADD TO CART</button>
                    </div>

                    <div className="product description">DESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTION{product.description}</div>

                    </div>
                </div>

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