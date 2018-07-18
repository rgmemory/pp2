import React, {Component} from 'react'
import './shopheader.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {handleProducts} from '../../ducks/reducer'

// import './shop.css'

export class Shopheader extends Component{
    constructor(){
        super()

        this.getFiltered = this.getFiltered.bind(this)
    }

    getFiltered(filter){
        console.log(filter)
        if(filter == 'all'){
            axios.get('/api/getproducts').then(res => {
                this.props.handleProducts(res.data)
            })
        }else{
            axios.post('api/getfiltered', {filter}).then(res => {
                this.props.handleProducts(res.data)
            })
        }
    }

    render(){

        return(
            <div className="shopheader">

                <div className="shopheader-links">
                    <button onClick={() => {this.getFiltered('all')}}>All</button>
                    <button onClick={() => {this.getFiltered('acc')}}>Accesories</button>
                    <button onClick={() => {this.getFiltered('shoes')}}>Shoes</button>
                </div>

                
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        cart: state.cart,
        products: state.cart
    }
}

const mapDispatchToProps = {
    handleProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopheader)