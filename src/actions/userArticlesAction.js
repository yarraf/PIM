import {GET_TOP_ARTICLES} from "./types";
import data from '../Components/home/Data.json'
// Get logs

//function generateTableHead(table,data){
   /*   document.getElementsByTagName('tr')
      var grille = new Array();
      for (var i=0; i<10; i++)
       for (var j=0; j<10; j++)
       grille[i][j] = 0;*/
   //for (let key of data ){
    // if (key >=10 )
      //return data
   //}
  // let data = Object.keys(Article[0]);
  // generateTableHead(table, data);

//}



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