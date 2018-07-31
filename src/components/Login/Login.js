import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class Login extends Component{
    constructor(){
        super()

    }

    render(){
        
        return(
            <div className="login">
                <a href={`${window.origin}/login`} >Login</a>
            </div>
        )
    }
}
