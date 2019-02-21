import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestNews } from '../../../actions/fetchNews';
import '../resources/styles/sectionStories.css';



class SectionStories extends Component {


    componentDidMount = () => {
        // this.props.requestNews();
    }

// delay the render of the section while it keyword searchs appropriate material
    
    render () {

        return (

            <div className='section-stories-wrapper'>

                <div className='section-stories-grid'>

                    <div className='section-column'>
                        <h5>Culture</h5>
                        <div className='section-story'>
                            <h3>Eu eiusmod reprehenderit sit pariatur 
                            adipisicing ad eiusmod id.</h3>
                            <p>{new Date().toLocaleString()}</p>
                        </div>
                    </div>

                    <div className='section-column'>
                        <h5>World</h5>
                        <div className='section-story'>
                            <h3>Ullamco fugiat reprehenderit aliquip
                             irure enim voluptate in.</h3>
                             <p>{new Date().toLocaleString()}</p>

                        </div>
                    </div>

                    <div className='section-column'>
                        <h5>Business</h5>
                        <div className='section-story'>
                            <h3>Consectetur fugiat nisi amet Lorem consectetur nisi.</h3>
                            <p>{new Date().toLocaleString()}</p>

                        </div>
                    </div>

                    <div className='section-column'>
                        <h5>Technology</h5>
                        <div className='section-story'>
                            <h3>Mollit ad cillum nostrud commodo aliquip
                             quis Lorem pariatur labore id.</h3>
                             <p>{new Date().toLocaleString()}</p>

                        </div>

                    </div>

                    <div className='section-column'>
                        <h5>Politics</h5>
                        <div className='section-story'>
                            <h3>Nulla incididunt deserunt esse
                             excepteur nulla elit.</h3>
                             <p>{new Date().toLocaleString()}</p>

                        </div>

                    </div>

                </div>
{console.log('what the f', this.props.news)}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {

    return {
        news: state.news.newsStories.stories,
    }
}

export default connect(mapStateToProps, { requestNews })(SectionStories);