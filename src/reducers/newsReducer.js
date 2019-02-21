import { FETCH_NEWS, REQUEST_NEWS, REQUEST_POPULAR_NEWS } from '../actions/fetchNews';


const initialState = {
    newsStories: {
        stories: [1,2,3],
        isLoading: true
    },

    popularStories: {
        stories: [1,2,3],
        isLoading: true
    },
}

const newsReducer = (state = initialState, action) => {

    console.log('News State: ', state)

    switch (action.type) {
        
        case FETCH_NEWS:
            return {
                ...state,
                newsStories: action.payload,
            }
        
        case REQUEST_NEWS:
            return {
                ...state,
                newsStories: action.payload

            }

        case REQUEST_POPULAR_NEWS:
            return {
                ...state,
                popularStories: action.payload,
            }

        default: 
            return state;
    }
}

export default newsReducer;