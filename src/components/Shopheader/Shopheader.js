import React, {Component} from 'react'
import './shopheader.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swoosh from './swoosh.png'
import search from './search.png'


export default class Shopheader extends Component{
    constructor(){
        super()

        this.getFiltered = this.getFiltered.bind(this)
    }

    getFiltered(filter){
        if(filter == 'all'){
            axios.get('/api/getproducts').then(res => {
            })
        }else{
            axios.post('api/getfiltered', {filter}).then(res => {
            })
        }
    }

    render(){

        return(
            <div className="shopheader">

                <div className="shopheader-logo">
                    <Link to="/">
                        <img src={swoosh} />
                    </Link>
                </div>

                <div className="shopheader-links">
                    <Link to="/shop"> <button onClick={() => {this.getFiltered('all')}}>Men's</button> </Link>
                    <button onClick={() => {this.getFiltered('all')}}>Womens</button>
                    <button onClick={() => {this.getFiltered('acc')}}>Kids</button>
                    <button onClick={() => {this.getFiltered('shoes')}}>Favorites</button>
                </div>

                <div className="shopheader-search">
                    <img src={search}/>
                </div>

                
            </div>
        )
    }
}
