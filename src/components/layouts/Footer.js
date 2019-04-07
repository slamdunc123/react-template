import React from 'react';

// partials
import Copyright from '../partials/Copyright';
import Social from '../partials/Social';


const Footer = () => {
    return(
        <div className="bg-dark text-white text-center">
            {/* <h5>Footer</h5> */}
            <Social />
            <Copyright />
        </div>
    )
}

export default Footer;