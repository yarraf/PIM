import {FETCHED_ARTICLE_TAGS} from '../actions/types'; 


const tagsReducer=(state={},action)=>{ 
      switch(action.type){ 
      case  FETCHED_ARTICLE_TAGS: 
           return{ 
             tags:action.payload.data 
                 }; 

            default: 
              return state; 
    } 
} 

export default tagsReducer; 

 