import {GET_ARTICLES} from "./types";
import data from '../Components/OverView/Data.json'
// Get logs

  export const getArticles = query =>({type:GET_ARTICLES,query});