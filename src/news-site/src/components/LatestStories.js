import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { requestPopularNews } from '../../../actions/fetchNews';
import '../resources/styles/latestStories.css';
import moment  from 'moment';
import { withRouter } from 'react-router';


class LatestStories extends Component {

  latestNews = () => {
   
    if(this.props.popularStories.isLoading === false) {
      const arr = this.getLatest();
                
      return (
        
        <div className='latest-stories-inner-container'>
        
            {/* <hr/> */}

          {
            arr.map((article, index) => {


              return (

                <div key={index} className='latest-story-item' onClick={() => this.sendProps(article)}>
              
                  <img src={`${article.urlToImage}`}/>

                  <h5>{article.title}</h5>
                  <div>
                    <p>{article.author}</p>
                    <p>{new moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</p>
                  </div>

                  <hr/>
                </div>
                
              )
            })
          }
        </div>
      )

    } else {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      )
    }
}


getLatest = () => {

  var arr = []

  for (let i = 7; i < 14; i++) {
    arr.push(this.props.popularStories.stories[i])

  }

  return arr
}


  sendProps = (props) => {
    this.props.history.push(`/news-site/article/${props.title}`, {
                            
        title: props.title,
        url: props.url,
        image: props.urlToImage,
        content: props.content,
        source: props.source,
        author: props.author,
        description: props.description,
        date: props.publishedAt,
        secion: 'Latest'

    
    })}



  render() {


    return (

        <div className='latest-stories-container'>

            <h3>Latest</h3>
            <hr/>

            {this.latestNews()}

        </div>

    )

  }

}

const mapStateToProps = (state, props) => {

    return {

        popularStories: state.news.popularStories,

    }
}

export default withRouter(connect(mapStateToProps, { requestPopularNews })(LatestStories));