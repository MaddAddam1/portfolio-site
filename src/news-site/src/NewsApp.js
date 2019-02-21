import React, { Component } from 'react';
import NewsHeader from './components/NewsHeader';
import FeaturedStories from '../src/components/FeaturedStories';
import BreakingNews from '../src/components/BreakingNews';
import './resources/styles/newsApp.css';
import PopularStories from './components/PopularStories';
import SectionStories from './components/SectionStories';
import AppBar from './components/AppBar';
import FeaturedStoriesStatic from './components/FeaturedStoriesStatic';
import RightSideBar from './components/RightSideBar';
import { requestNews } from '../../actions/fetchNews';
import { connect } from 'react-redux';
import LatestStories from './components/LatestStories';
import Footer from './components/Footer';

class NewsApp extends Component {
    
    state = {  }



    render() { 

        return ( 

            <div className='news-site-wrapper'>
              
                    <AppBar />
                    
                    <FeaturedStoriesStatic />

                    <SectionStories />
                    
                    <div className='latest-popular-container'>
                    

                        <LatestStories/>
                        
                        <PopularStories />

                    </div>

                    <Footer/>

            </div>

         );
    }
}
 
export default connect(null, { requestNews })(NewsApp);