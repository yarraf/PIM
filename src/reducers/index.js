import {combineReducers} from 'redux';
import userArticles from './articleReducer';
import articleInfo from './articleDetailReducer';
import articleTags from './articleTagsReducer';
import articleAttr from './articleAttReducer';

export default combineReducers({
    userArticles,
    articleInfo,
    articleTags,
    articleAttr,
});
