import React, { Component } from 'react';
import { Card, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import '../resources/styles/featuredStories.css';
import yotsubaSalute from '../../../resources/images/yotsuba-salute.png';



class FeaturedCarousel extends Component {
    
 


    render() { 

        var settings = {
            className: 'slider-div',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplayspeed: 5000,
        }

        const { newsItems } = this.props;

        return ( 

            <div className='news-featured-wrapper'>

                <h2>Featured</h2>

                <Slider {...settings}>
                    {

                        newsItems.map((article, index) => {
                            
                    return (
               
                        <a href={article.url}>
                            <div>
                                <div className='news-carousel-image' style={{ background: `url(${article.image})`}} >
                                </div>
                                <h5>{article.headline}</h5>
                            </div>
                        </a>
                        )
                    })

                    }
                </Slider>

            </div>
            

         );
    }
}

export default FeaturedCarousel;