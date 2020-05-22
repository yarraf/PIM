import {FETCHED_ARTICLE_ATTR} from '../actions/types'; 



const AttReducer=(state={},action)=>{ 
      switch(action.type){ 
      case  FETCHED_ARTICLE_ATTR: 
           return{
            attr:action.payload.data
           };
            
            default: 
              return state; 
    } 
} 

export default AttReducer; 