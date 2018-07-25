import React, {Component} from 'react'
import './shop.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {handleCartSize} from '../../ducks/reducer'
import {connect} from 'react-redux'


export class Shop extends Component{
    constructor(){
        super()

        this.state = {
            products: []
        }
    }
    
    componentDidMount(){
        // axios.get('/api/getproducts').then(res => {
        //     this.setState({
        //         products: res.data
        //     })
        // })

        axios.get('/api/getproducts').then(res => {
            this.setState({
                products: res.data
            })

            axios.get('/api/getcartsize').then(res => {
                console.log('cart total', res.data)
                this.props.handleCartSize(res.data)

            })
            
        })
    }

    render(){

        let products = this.state.products.map((current, index) => {
            return(
                <div className="shop-products" key={current + index}>
                    <Link to={`/product/${current.id}`}> <div className="shop-products-image"><img src={current.image} /></div>  </Link>
                        <div className="shop-products-name"><p>{current.name}</p></div>
                        <div className="shop-products-type"><p>{current.type}</p></div>
                        
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

const mapDispatchToProps = {
    handleCartSize
}

export default connect(null, mapDispatchToProps)(Shop)
