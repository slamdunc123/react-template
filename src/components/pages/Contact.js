import React from 'react';
import Hero from '../layouts/Hero';

import HeroImg from '../../images/03 - Landscape-1200x480.jpg';

import ScrollAnimation from 'react-animate-on-scroll';

const pageData = require("../data/PageData.json"); // import pageData from '../data/PageData.json';

const Contact = () => {
    return(
        <div>

            <div className="row">
                <div className="section1"></div>
            </div>
            <div className="row">
                {/* <div className="col-lg-6 col-md-12">
                    <Hero title={pageData[2].title} img={HeroImg} heroText={pageData[2].heroText}/>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Hero title={pageData[2].title} img={HeroImg} heroText={pageData[2].heroText}/>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Hero title={pageData[2].title} img={HeroImg} heroText={pageData[2].heroText}/>
                </div> */}
                
                
            </div>
            <div className="row">
                <div className="section1">
                    <div className="col-lg-6 offset-lg-0 col-md-12">
                        <ScrollAnimation animateIn="fadeIn">
                            <Hero title={pageData[2].title} img={HeroImg} heroText={pageData[2].heroText}/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="section1">
                    <div className="col-lg-6 offset-lg-3 col-md-12">
                        <ScrollAnimation animateIn="fadeIn">
                            <Hero title={pageData[2].title} img={HeroImg} heroText={pageData[2].heroText}/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="section1">
                    <div className="col-lg-6 offset-lg-6 col-md-12">
                        <ScrollAnimation animateIn="fadeIn">
                            <Hero title={pageData[2].title} img={HeroImg} heroText={pageData[2].heroText}/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
           
            
           
            <div className="container">
                <div className="text-center">
                    {pageData[2].pageText}
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Contact;