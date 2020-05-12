import {combineReducers} from 'redux';
import userArticle from './articleReducer';
import articleInfo from './articleDetailReducer';
import articleTags from './articleTagsReducer';

export default combineReducers({
    userArticle,
    articleInfo,
    articleTags
});
