import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import {Link} from 'react-router-dom'
export default class Login extends Component{
    constructor(){
        super()

    }

    render(){
        
        return(
            <div className="login">
                {/* <Link to="/api/login">Login</Link> */}
                <a href="http://localhost:3005/login" >Login</a>
            </div>
        )
    }
}
