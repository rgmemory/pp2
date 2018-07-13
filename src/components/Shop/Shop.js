import React, {Component} from 'react'
import './shop.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleProducts} from '../../ducks/reducer'

export default class Shop extends Component{
    constructor(){
        super()

        this.state = {
            products: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/getproducts').then(res => {

            // this.props.handleProducts(res.data)
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

// function mapStateToProps(state){
//     return{
//         products: state.products
//     }
// }

// const mapDispatchToProps = {
//     handleProducts
// }


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Shop)