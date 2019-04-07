import React from 'react';
import Hero from '../layouts/Hero';

import HeroImg from '../../images/02 - Landscape-1200x480.jpg';

const pageData = require("../data/PageData.json"); // import pageData from '../data/PageData.json';

const About = () => {
    return(
        <div>
            <Hero title={pageData[1].title} img={HeroImg} heroText={pageData[1].heroText}/>
            <div className="container">
                <div className="text-center">
                    {pageData[1].pageText}
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default About;