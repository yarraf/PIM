import {GET_TOP_ARTICLES} from "./types";
import data from '../Components/OverView/Data.json'
// Get logs
export const getArticles = () => async (dispatch) => {
    try {
        const res = await data;
      dispatch({
        type: GET_TOP_ARTICLES,
        payload: res,
      });
    } catch (error) {
      console.log(error)
    }
  };