import React, { Component } from 'react'
import '../resources/styles/footer.css';
import { Fade } from 'react-reveal';

class Footer extends Component {

    state = {
        showFooter: false,
    }

    
    render() {

        return ( 
            <Fade delay={600}>
                <div className='footer-container'>

                    <h3>Footer</h3>

                </div>
            </Fade>
        )

    }

}

export default Footer;