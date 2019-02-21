import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestPopularNews } from '../../../actions/fetchNews';
import '../resources/styles/popularStories.css';



class PopularStories extends Component {

  componentDidMount = () => {
    this.props.requestPopularNews();
    console.log('popular', this.props.popularStories)

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
        section: 'Popular'

    
    })}


  // migtht create a component for each list item that's returned in popular, for easier formatting

  popularNews = () => {
   
      if(this.props.popularStories.isLoading === false) {
        const arr = this.getPopular();
        return (
          <div className='popular-stories-inner-container' >

          {/* <hr/> */}

            {
              arr.map((article, index) => {
                var author = article.author;

                if(author !== null && !author.includes('http') && author.length > 25){

                  author = author.substring(0,25);

                } else if (author !== null && author.includes('http')) {
                  author = '';
                }
                  
                return (

                  <div key={index} className='popular-story-item' onClick={() => this.sendProps(article)}>

                    <h5>{`${index + 1}.`}&ensp;{article.title}</h5>

                    <p>{author}</p>

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


  getPopular = () => {

    var arr = []

    for (let i = 0; i < 5; i++) {
      arr.push(this.props.popularStories.stories[i])

    }



    return arr
  }

  render() {


    return (

        <div className='popular-stories-outer-container'>

            <h3>Popular</h3>
            <hr/>
            {this.popularNews()}

        </div>

    )

  }

}

const mapStateToProps = (state, props) => {

    return {
        popularStories: state.news.popularStories,

    }
}

export default withRouter(connect(mapStateToProps, { requestPopularNews })(PopularStories));