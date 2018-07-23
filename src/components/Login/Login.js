import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'
export default class Login extends Component{
    constructor(){
        super()

    }

    render(){
        
        return(
            <div className="login">
                <Link to="/checkout">Login</Link>
            </div>
        )
    }
}
