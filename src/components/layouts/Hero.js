import React from 'react';

// animation
import "animate.css/animate.min.css";

const Hero = (props) => {
    return(
        <div>
            <div className="animated fadeInLeft slow">
                <h5>{props.title}</h5>
            </div>
            <div className="animated zoomIn slow">
                <img width="100%" height="auto" src={props.img} alt="" />
                <div className="text-center">
                    {props.heroText}
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Hero;