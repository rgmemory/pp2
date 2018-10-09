import React, {Component} from 'react'
import './editmodal.css'
import x from './x.png'
import axios from 'axios'
import {connect} from 'react-redux'
import {handleeditCart, handleClearEditCart} from '../../ducks/reducer'

export class Editmodal extends Component{

    constructor(){
        super()

        this.state = {
            cart: [],
            size: 0
        }

        this.handleSize = this.handleSize.bind(this)
        this.updateSize = this.updateSize.bind(this)
    }   

    componentDidMount(){
        console.log('props.cart', this.props.editCart)
    }

    handleSize(value){
        this.setState({
            size: value
        })
    }

    updateSize(){
        axios.put('/api/updatesize', {size: this.state.size, id: this.props.editCart[0].id}).then(res => {
            this.props.updateCart();
            this.props.handleClearEditCart();
            this.props.close()
        })
    }

    render(){

        let displayCart = this.props.editCart.map((current, index) => {
            return(
                <div className="edit-product" key={current + index}>
                    <div className="edit-name-left">{current.name}</div>
                    <div className="edit-product-image"><img src={current.image}></img></div>
                    
                    <div className="edit-product-middle">
                    
                        <div className="edit-product-name">{current.name}</div>
                        <div className="edit-product-name">{current.type}</div>
                        <div className="edit-product-size">Size:</div>

                            <div className="edit-product-buttons">
                                <select name="month" value={this.state.size} onChange={e => this.handleSize(e.target.value)}>
                                    <option value='7'>7</option>
                                    <option value='7.5'>7.5</option>
                                    <option value='8'>8</option>
                                    <option value='8.5'>8.5</option>
                                    <option value='9'>9</option>
                                    <option value='9.5'>9.5</option>
                                    <option value='10'>10</option>
                                    <option value='10.5'>10.5</option>
                                    <option value='11'>11</option>
                                    <option value='11.5'>11.5</option>
                                    <option value='12'>12</option>
                                    <option value='12.5'>12.5</option>
                                    <option value='13'>13</option>
                                    <option value='14'>14</option>
                                    <option value='15'>15</option>
                                </select>
                            </div>
                            
                            <div className="edit-update-size">
                                <button onClick={() => this.updateSize()}>Update Size</button>
                            </div>
                    </div>

                    <div className="cart-product-cost">${current.cost}</div>
                </div>
            )
        })

        return(
            <div className="overlay"> 
                <div className="modal-box">
                    
                    <div className="x-button">
                        <button onClick={this.props.close}>
                            <img className="x" src={x}  />
                        </button>
                    </div>

                    <div>

                        {displayCart}

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        editCart: state.editCart
    }
}

const mapDispatchToProps = {
    handleeditCart,
    handleClearEditCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Editmodal)