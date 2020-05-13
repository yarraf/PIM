import {combineReducers} from 'redux';
import userArticles from './articleReducer';
import articleInfo from './articleDetailReducer';
import articleTags from './articleTagsReducer';

export default combineReducers({
    userArticles,
    articleInfo,
    articleTags
});
