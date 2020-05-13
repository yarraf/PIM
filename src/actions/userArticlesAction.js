import {GET_ARTICLES,GET_ARTICLE_BY_CODIC} from "./types"; 


// Get log

export const getArticles = () =>({type:GET_ARTICLES}); 
export const getArticleByCodic = article =>({type:GET_ARTICLE_BY_CODIC,article}); 

 