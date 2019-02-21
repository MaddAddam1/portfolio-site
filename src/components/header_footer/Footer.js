import React from 'react';
import { Fade } from 'react-reveal';

const Footer = () => {
    
    return (

        <footer className='footer-color'>
            <Fade delay={500}>
                <div className='font_righteous footer-logo'>Caleb Bass</div>
                <div className='footer-copyright'> &copy; All Rights Reserved</div>
            </Fade>
            
        </footer>
    )
}

export default Footer;
