import React from 'react'
import Carousel from './Carousel'; 
import Slide from 'react-reveal';
import yotsubaSalute from '../../resources/images/yotsuba-salute.png';

const Featured = () => {
    return (
        <div style={{ position: 'relative'}}>
            <Carousel/>
            <div className='project-name'>

                <div className='wrapper'>
                    Projects
                </div>

            </div>

            {/* <Slide left delay={1000}>
                <div style={{height: '240px', width: '240px', background: `url(${yotsubaSalute})`}}>
                    
                </div>
            </Slide> */}
        </div>
    )
}

export default Featured;