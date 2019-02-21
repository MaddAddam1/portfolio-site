import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import ProjectInfo from './components/project-info';
import Details from './components/about/Details';
import Footer from './components/header_footer/Footer';
import GitHub from './components/about/GitHub';
class App extends Component {

  render() {

    return (

      <div className="App">
        <Header/>
        <Featured/>

        <Element name='portfolio'>
          <ProjectInfo/>
        </Element>

        <Element name='about'>
          <Details />
        </Element>

        <Element name='github'>
          <GitHub/>
        </Element>

        <Footer/>
      </div>

    );
  }
}

export default App;
