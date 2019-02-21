import React, { Component } from 'react';
import { Card, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import axios from 'axios';
import '../resources/styles/featuredStories.css';
import FeaturedCarousel from './FeaturedCarousel';


class FeaturedStories extends Component {

    state = { 
        newsResponse: null,
        newsStories: [],
     }
    
    componentDidMount() {
        this.fetchNews();
    
    }
    // could make the apended search parameters come from user input, then display top stories from
    // keywords and data range
    async fetchNews() {
    
        var defaultNews = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=50778fc0df4a47518bf54be498eac760';
    
        axios.get(defaultNews)
            .then(res =>  {
                this.setState({ newsResponse: res })
                // console.log('News Response: ', this.state.newsResponse)
                this.constructNewsItems();
    
            })
    }
    
    constructNewsItems = () => {
        var arr = this.state.newsResponse.data.articles.map(article => ({
            
            headline: article.title,
            author: article.author,
            content: article.content,
            url: article.url,
            image: article.urlToImage,
            publishedAt: article.publishedAt,
            description: article.description,
            source: article.source.name
    
        }))
    
        this.setState({ newsStories: arr })
        // console.log('News: ', this.state.newsStories)
    }
    
    newsSearch = () => {
    
        var keyword = document.getElementById("news-search").value;
    
        var url = 'https://newsapi.org/v2/everything?' +
        'q=' + keyword + '&' +
        'sortBy=popularity&' +
        'apiKey=50778fc0df4a47518bf54be498eac760';
    
        axios.get(url)
            .then(res =>  {
                this.setState({ newsResponse: res })
                // console.log('Searched News ', this.state.newsResponse)
                this.constructNewsItems();
    
            })
    }

    render() { 

        return ( 

            <div className='featured-stories' >

                News Keyword Search: <input type="search" id="news-search"/>
                <button id="news-search-button" onClick={this.newsSearch}>Submit</button>
                
                <FeaturedCarousel newsItems={this.state.newsStories}/>
                {/* <hr/> */}
            </div>

         );
    }
}
 
export default FeaturedStories;

