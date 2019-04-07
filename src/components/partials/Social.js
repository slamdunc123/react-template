import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
 
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />

const Social = () => {
    return(
        <div className="bg-dark text-white text-center">
            <div className="socialMedia">
                {facebookIcon}&nbsp;&nbsp;
                {twitterIcon}&nbsp;&nbsp;
                {instagramIcon}
            </div>
        </div>
    )
}

export default Social;