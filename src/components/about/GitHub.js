import React, { Component } from 'react'
import { Fade } from 'react-reveal';
import axios from 'axios';
import git from '../../resources/images/git.png';
import Skills from './Skills';

class GitHub extends Component {

    state = {
        gitDetails: [],
    }

    componentDidMount() {
        this.getGit();
    }

    getGit = () => {
        axios.get(`https://api.github.com/users/MaddAddam1`)
            .then(res => {
                this.setState({gitDetails: res.data})
                console.log(this.state.gitDetails)
            })

    }

    render() {


        return (

            <div className='github-skills-wrapper'>

                <Fade top>
                    <h2>GitHub</h2>
                    <div className='git-details'>
                        <p>
                            <a href={this.state.gitDetails.html_url} target='__blank'><img src={git}/></a>
                        </p>
                    </div>
                    
                </Fade>

                <Fade bottom>

                    <Skills/>

                </Fade>


            </div>

        )
    }
    
}

export default GitHub;