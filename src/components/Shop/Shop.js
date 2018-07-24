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
                    <Link to={`/product/${current.id}`}> <div className="shop-products-image"><img src={current.image} /></div>  </Link>
                        <div className="shop-products-name"><p>{current.name}</p></div>
                        {/* men's running shoe */}
                        <div className="shop-products-cost">${current.cost}</div>
                    
                </div>
            )
        })

        return(
            <div className="shop">

                  

                <div className="shop-wrapper">
                    <div className="shop-title">
                        <p>MEN'S RUNNING SHOES</p>
                    </div>  
                    
                    <div className="shop-display-products">
                        {products}
                    </div>
                </div>
            </div>
        )
    }

}
