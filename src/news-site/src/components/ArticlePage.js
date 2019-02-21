import React, { Component } from 'react'
import '../resources/styles/articlePage.css';

class ArticlePage extends Component {

    state = {

        details: null
    }

    componentDidMount = () => {
        this.setState({ details: this.props.location.state})
    }
    

    render() {

   

        return ( 
            
            
            
            <div className='article-page-container'>

                <h3>{this.props.location.state.title}</h3>
                <img src={this.props.location.state.image}/>





                {console.log('params', this.props.match.params.title)}

                <p>{console.log('pstate', this.state.details)}</p>

            </div>
        )
    }
}

export default ArticlePage;