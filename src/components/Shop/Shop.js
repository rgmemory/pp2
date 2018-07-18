import React, {Component} from 'react'
import './shop.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleProducts} from '../../ducks/reducer'

export class Shop extends Component{
    constructor(){
        super()
    }
    
    componentDidMount(){
        axios.get('/api/getproducts').then(res => {

            this.props.handleProducts(res.data)

        })
    }

    render(){

        let products = this.props.products.map((current, index) => {
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
                    {/* <div className="shop-products-container"> */}
                        {products}
                    {/* </div> */}
                    
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

const mapDispatchToProps = {
    handleProducts
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop)