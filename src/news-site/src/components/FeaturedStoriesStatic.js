import React, { Component } from 'react'
import '../resources/styles/featuredStoriesStatic.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { requestNews } from '../../../actions/fetchNews';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class FeaturedStoriesStatic extends Component {
    
 
    componentDidMount() {
        this.props.requestNews();
        console.log('loading cdm', this.props.news.stories)
        
    }

    // sendProps = () => {
    //     this.props.history.push(`/news-site/article/${this.props.news.stories[1].title}`, {
                                
    //         title: this.props.news.stories[1].title,
    //         url: this.props.news.stories[1].url,
    //         image: this.props.news.stories[1].urlToImage,
    //         content: this.props.news.stories[1].content,
    //         source: this.props.news.stories[1].source,
    //         author: this.props.news.stories[1].author,
    //         description: this.props.news.stories[1].description,
    //         date: this.props.news.stories[1].publishedAt,
        
    //     })}
    

    
    sendProps = (props) => {
        this.props.history.push(`/news-site/article/${props.title}`, {
                                
            title: props.title,
            url: props.url,
            image: props.urlToImage,
            content: props.content,
            source: props.source,
            author: props.author,
            description: props.description,
            date: props.publishedAt
  
        
        })}
    

    featuredContent = () => {
        console.log('loading content', this.props.news)
        console.log('is it finished?', this.props.news.isLoading)


        if(this.props.news.isLoading === false){

            return (

                <div className='featured-stories-static-container'>

                    <div className='featured-stories-left stories-line-divider-left'>

                        <div className='featured-stories-left-item' onClick={() => this.sendProps(this.props.news.stories[1])}>
                     

                            <div className='left-item-image'
                            style={{background: `url(${this.props.news.stories[1].urlToImage}) no-repeat center`,
                            backgroundSize: 'contain'}}/>

                            <div className='left-item-headline'>

                                <h4>{this.props.news.stories[1].title}</h4>
                                <p>{this.props.news.stories[1].author}</p>
                                <hr/>

                            </div>

                        </div>

                        <div className='featured-stories-left-item' onClick={() => this.sendProps(this.props.news.stories[2])}>

                            <div className='left-item-image'
                            style={{background: `url(${this.props.news.stories[2].urlToImage}) no-repeat center`,
                            backgroundSize: 'contain'}}/>

                            <div className='left-item-headline'>

                                    <h4>{this.props.news.stories[2].title}</h4>
                                    <p>{this.props.news.stories[2].author}</p>

                                    <hr/>
                            </div>

                        </div>

                        <div className='featured-stories-left-item' onClick={() => this.sendProps(this.props.news.stories[3])}>

                            <div className='left-item-image'
                            style={{background: `url(${this.props.news.stories[3].urlToImage}) no-repeat center`,
                            backgroundSize: 'contain'}}/>
                             
                            <div className='left-item-headline'>

                                <h4>{this.props.news.stories[3].title}</h4>
                                <p>{this.props.news.stories[3].author}</p>


                            </div>

                        </div>
                        
                    </div>

                    {/* end featurred left container */}
                    <div className='featured-stories-center' onClick={() => this.sendProps(this.props.news.stories[0])}>
                        <div className='center-story-image'
                            style={{ background: `url(${this.props.news.stories[0].urlToImage}` }}
                        />
                        <div className='center-story-headline'>
                            <h4>{this.props.news.stories[0].title}</h4>
                            <p>{this.props.news.stories[0].author}</p>

                        </div>

                    </div>

                    {/* end featured center container */}

                    <div className='featured-stories-right stories-line-divider-right'>

                        <div className='featured-stories-right-item' onClick={() => this.sendProps(this.props.news.stories[4])}>

                            <div className='right-item-image'
                            style={{background: `url(${this.props.news.stories[4].urlToImage}) no-repeat center`,
                            backgroundSize: 'contain'}}/>

                            <div className='right-item-headline'>

                                <h4>{this.props.news.stories[4].title}</h4>
                                <p>{this.props.news.stories[4].author}</p>

                                <hr/>

                            </div>

                        </div>

                        <div className='featured-stories-right-item' onClick={() => this.sendProps(this.props.news.stories[5])}>

                            <div className='right-item-image'
                            style={{background: `url(${this.props.news.stories[5].urlToImage}) no-repeat center`,
                            backgroundSize: 'contain' }}/>
                            
                            <div className='right-item-headline'>

                                <h4>{this.props.news.stories[5].title}</h4>
                                <p>{this.props.news.stories[5].author}</p>

                                <hr/>

                            </div>

                        </div>

                        <div className='featured-stories-right-item' onClick={() => this.sendProps(this.props.news.stories[6])}>

                            <div className='right-item-image'
                            style={{background: `url(${this.props.news.stories[6].urlToImage}) no-repeat center`,
                            backgroundSize: 'contain'}}/>

                            <div className='right-item-headline'>

                                <h4>{this.props.news.stories[6].title}</h4>
                                <p>{this.props.news.stories[6].author}</p>


                            </div>

                        </div>

                    </div>

                    {/* end featured right container */}

                    {/* <div className='line'/> */}
                </div>
            )
        } else {
            return <div><h3>Loading...</h3></div>
        }


    }



    render() {


        return (

            <div className='featured-stories-static-outer'>

                {this.featuredContent()}
               
                {/* <div className='line'/>  */}
                                    <hr/>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {

    return {
        news: state.news.newsStories,
    }
    
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getTheNews: () => dispatch({ type: 'FETCH_NEWS'})
//     }
// }

export default withRouter(connect(mapStateToProps, { requestNews })(FeaturedStoriesStatic));