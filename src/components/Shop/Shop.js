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
    }
    
    componentDidMount(){
        axios.get('/api/getproducts').then(res => {

            this.setState({
                products: res.data
            })
        })
    }

    render(){

        let products = this.state.products.map((current, index) => {
            return(
                <div className="shop-products" key={current + index}>
                    <Link to={`/product/${current.id}`}>
                        <div className="shop-products-image"><img src={current.image} /></div>
                        <div className="shop-products-name">{current.name}</div>
                        <div className="shop-products-cost">{current.cost}</div>
                    </Link>
                </div>
            )
        })

        return(
            <div className="shop">
                <div className="shop-wrapper">
                        {products}
                </div>
            </div>
        )
    }

}
