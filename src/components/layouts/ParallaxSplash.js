import React from 'react';

// parallax
import { Parallax, Background } from 'react-parallax';

const ParallaxSplash = () => {
    return(
        <div>
        <Parallax
            blur = {0}
            bgImage = {require("../../images/01 - Landscape-1200x480.jpg")}
            bgimageAlt = "Landscape 01"
            strength = {400}
        >
        <div>Hello</div>
        <div style={{ height: '80vh', width: '100vw' }} />
        </Parallax>
    </div>
    )
    
}

export default ParallaxSplash;