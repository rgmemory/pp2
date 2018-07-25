import React, {Component} from 'react';
import './footer.css'
import footer from './footer.png'

export default class Footer extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="footer">
                <img src={footer} />
            </div>
        )
    }
}