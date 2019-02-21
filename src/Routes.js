import React from 'react'
import { Route } from 'react-router';
import App from './App';
import NewsApp from '../src/news-site/src/NewsApp';
import ArticlePage from './news-site/src/components/ArticlePage';

const Routes = () => (

    <div>
        <Route exact path='/' component={App}/>
        <Route exact path='/news-site' component={NewsApp}/>
        <Route path='/news-site/article/:title' component={ArticlePage}/>

    </div>

)


export default Routes;