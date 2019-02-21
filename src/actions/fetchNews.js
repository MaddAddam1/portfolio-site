import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';
export const SEARCH_NEWS_KEYWORD = 'SEARCH_NEWS_KEYWORD';
export const FORMAT_NEWS = 'FORMAT_NEWS';
export const REQUEST_NEWS = 'REQUEST_NEWS';
export const REQUEST_POPULAR_NEWS = 'REQUEST_POPULAR_NEWS';

export const searchNewsKeyword = (keyword) => async dispatch => {
    

        var url = 'https://newsapi.org/v2/top-headlines?' +
            'q=' + keyword + '&' +
            'sortBy=popularity&' +
            'apiKey=50778fc0df4a47518bf54be498eac760';

        const promise = await axios.get(url)

        dispatch({ type: SEARCH_NEWS_KEYWORD, payload: promise.data.articles, isLoading: false})

    }


export const requestNews = () => async dispatch => {

        const defaultNews = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=50778fc0df4a47518bf54be498eac760';

        const promise = await axios.get(defaultNews)
      
 
        dispatch({ type: REQUEST_NEWS, payload: {stories: promise.data.articles, isLoading: false}})
    
    
}

export const requestPopularNews = () => async dispatch => {

    const defaultNews = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 
    'sortBy=popularity&' +
    'apiKey=50778fc0df4a47518bf54be498eac760';

    const promise = await axios.get(defaultNews)
  

    dispatch({ type: REQUEST_POPULAR_NEWS, payload: {stories: promise.data.articles, isLoading: false}})


}



// export const fetchNews = () => {

//     var defaultNews = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=50778fc0df4a47518bf54be498eac760';
//     return async dispatch => {
        
//         const promise = await axios.get(defaultNews)
//         .then(res => res.json())
//         .then(data => {
            
//             data.articles.map(article => ({
//                 headline: article.title,
//                 author: article.author,
//                 content: article.content,
//                 url: article.url,
//                 image: article.urlToImage,
//                 publishedAt: article.publishedAt,
//                 description: article.description,
//                 source: article.source.name
        
//             }))
//         }
        

//         return {
//             type: FETCH_NEWS,
//             payload: promise

//         }
//     }
  
// }


// export const fetchNews2 = () => {


//     return dispatch => {
//         axios.get(defaultNews)
//         .then(res => res.json())
        
//         .then(json => dispatch(formatNews(json)))

        
//     }
  
// }
//fetch news has no type and so cant be returned in the reducer, havae to call it with another action somehow


// export const fetchNews = () => {

//     return {

//         type: FETCH_NEWS,
//         payload: null

//     }
// }