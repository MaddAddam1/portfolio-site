
import React from 'react'
import Slider from 'react-slick';
import yotsubaNo from '../../resources/images/yotsuba-no.jpg';
import yotsubaSalute from '../../resources/images/yotsuba-salute.png';
import yotsubaGun from '../../resources/images/yotsuba-gun.jpg';
import vaporSun from '../../resources/images/vaporwave-sun.jpg';
import vaporCity from '../../resources/images/vaporwave-city.jpg';
import vaporKon from '../../resources/images/vaporwave-kon.jpg';

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
    }

    return (
        <div
            className='carousel-wrapper'
            style={{
                background: 'red',
                height: `${window.innerHeight}px`,
                overflow: 'hidden',

            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className='carousel-image'
                        style={{
                            background: `url(${vaporSun})`,
                            height: `${window.innerHeight}px`,
                        }}
                    
                    >

                    </div>
                </div>

                <div>
                    <div 
                        className='carousel-image'
                        style={{
                            background: `url(${vaporCity})`,
                            height: `${window.innerHeight}px`,
                        }}
                    
                    >

                    </div>
                </div>

                <div>
                    <div 
                        className='carousel-image'
                        style={{
                            background: `url(${vaporKon})`,
                            height: `${window.innerHeight}px`,
                        }}
                    
                    >

                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;
