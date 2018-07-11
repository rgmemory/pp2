import React, {Component} from 'react'

export default class Product extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="product">

            {this.props.match.params.product_id}
                Product
            </div>
        )
    }
}