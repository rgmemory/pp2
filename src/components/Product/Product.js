import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleCartSize} from '../../ducks/reducer'
import axios from 'axios'
import './product.css'

export class Product extends Component{
    constructor(){
        super()

        this.state = {
            size: 8,
            product: []
        }

        this.handleSize = this.handleSize.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/getproduct/${this.props.match.params.product_id}`).then(res => {
            this.setState({
                product: res.data[0]
            })
        })
    }

    handleSize(value){
        this.setState({
            size: value
        })
    }

    addToCart(product_id, size){
        axios.post('/api/addtocart', {product_id, size}).then(res => {
            axios.get('/api/getcartsize').then(res => {
                this.props.handleCartSize(res.data)
            })
        })

        //TODO if user logged in (if we have a userID) use axios call, if not use localstorage
        
        // if(localStorage.getItem('cart')){
        //     let tempCart = JSON.parse(localStorage.getItem('cart'));

        //     tempCart.push({product_id, size});

        //     this.props.handleCartSize(tempCart.length);

        //     localStorage.setItem('cart', JSON.stringify(tempCart));
    }

    render(){
        return(
            <div className="product">
                <div className="product-wrapper">

                    <div className="product-images">
                        <img src={this.state.product.image}/>
                        <img src={this.state.product.image2}/>
                        <img src={this.state.product.image3}/>
                        <img src={this.state.product.image4}/>
                        
                    </div>

                    <div className="product-info">
                        <div className="product-info-top">
                            <div className="product-type">{this.state.product.type}</div>
                            <div className="product-cost">${this.state.product.cost}</div>
                        </div>
                        
                        <div className="product-name">{this.state.product.name}</div>

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
                    
                        </div>     

                        <div className="product-add-cart"> 
            
                            <button onClick={() => {this.addToCart(
                                this.props.match.params.product_id, 
                                this.state.size
                            )}}>ADD TO CART</button>
                        </div>

                        <div className="product-description"><p>{this.state.product.description}</p></div>

                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    handleCartSize
}

export default connect(null, mapDispatchToProps)(Product)