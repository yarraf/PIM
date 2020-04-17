import {combineReducers} from 'redux';
import userArticlesReducer from '../reducers/articleReducer'

export default combineReducers({
    userArticle:userArticlesReducer
});
