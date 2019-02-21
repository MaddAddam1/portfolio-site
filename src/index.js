import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Routes from './Routes';
import newsReducer from './reducers/newsReducer';

const store = createStore(
    combineReducers({
        news: newsReducer
    }),
    applyMiddleware(thunk)
)

const jsx = (
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    jsx
, document.getElementById('root'));


