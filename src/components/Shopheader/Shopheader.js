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
                    <button onClick={() => {this.getFiltered('all')}}>All</button>
                    <button onClick={() => {this.getFiltered('acc')}}>Accesories</button>
                    <button onClick={() => {this.getFiltered('shoes')}}>Shoes</button>
                </div>

                <div className="shopheader-search">
                    <img src={search}/>
                </div>

                
            </div>
        )
    }
}
