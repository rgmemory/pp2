import React, {Component} from 'react'
import './shop.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Shop extends Component{
    constructor(){
        super()

        this.state = {
            products: []
        }

        this.selectProduct = this.selectProduct.bind(this)
    }

    componentDidMount(){
        axios.get('/api/getproducts').then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    selectProduct(value){
        console.log('product clicked', value)
    }

    render(){

        let products = this.state.products.map((current, index) => {
            return(
                <div className="shop-products" key={current + index}>
                    <Link to="/product" onClick={() => this.selectProduct(current.id)}>
                        <div>{current.image}</div>
                        <div>{current.name}</div>
                        <div>{current.cost}</div>
                    </Link>
                </div>
            )
        })

        return(
            <div className="shop">
                <div className="shop-wrapper">
                    Shop

                    <div>
                        {products}
                    </div>
                    
                </div>
            </div>
        )
    }
}