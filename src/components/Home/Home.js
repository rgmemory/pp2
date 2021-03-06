import React, {Component} from 'react'
import './home.css'

export default class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="home">
                <div className="home-margin">

                <div className="bball-video">

                    <a href={`${window.origin}/login`} >
                        <div className="kd-home-overlay">
                            <div>KD 11 'STILL KD'</div>
                            <div>Built for a plush and bouncy ride.</div>
                            <button>SHOP NOW</button>
                            <button>LEARN MORE</button>
                        </div>
                    </a>

                    <video autoPlay="autoplay" loop="loop" width="1500" muted="true">
                        <source src="https://nikevideo.nike.com/72451143001/201807/3937/72451143001_5810433887001_5810428553001.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className="kids-video">

                    <video autoPlay="autoplay" loop="loop" width="1500" >
                        <source src="https://nikevideo.nike.com/72451143001/201807/1648/72451143001_5812736391001_5812734287001.mp4" type="video/mp4"/>
                    </video>
                </div>

                </div>
            </div>
        )
    }
}