import {GET_ARTICLE_INFO,GET_TAGS_ARTICLE, GET_ATTR_ARTICLE} from './types'; 

export const getArticleInfo = () =>({type:GET_ARTICLE_INFO}); 
export const getTagsArticle = () =>({type:GET_TAGS_ARTICLE}); 
export const getAttrArticle =() =>({type:GET_ATTR_ARTICLE});