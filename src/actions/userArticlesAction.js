import {GET_ARTICLES,GET_ARTICLE_BY_CODIC} from "./types";
import data from '../Components/OverView/Data.json'
// Get logs

  export const getArticles = () =>({type:GET_ARTICLES});
  export const getArticleByCodic = article =>({type:GET_ARTICLE_BY_CODIC,article});