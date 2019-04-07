import React from 'react';
import Hero from '../layouts/Hero';

import HeroImg from '../../images/01 - Landscape-1200x480.jpg';

const pageData = require("../data/PageData.json"); // import pageData from '../data/PageData.json';

const Home = () => {
    return(
        <div>
            <Hero title={pageData[0].title} img={HeroImg} heroText={pageData[0].heroText} />
            <div className="container">
                <div className="text-center">
                    {pageData[0].pageText}
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Home;

