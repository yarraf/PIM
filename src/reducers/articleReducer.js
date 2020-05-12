import {FETCHED_ARTICLES,FETCHED_GET_ONE_ARTICLE} from '../actions/types';


const initialState = {
   articles:[],
    Loaded: false,
};
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_ARTICLES:
           return {
              articles: action.payload.data,
               //articles: action.payload.data.slice(0,10),
               loading:false,
               isSelected:false      
           };
           case FETCHED_GET_ONE_ARTICLE:
               return{
                    article:action.payload.data,
                    isSelected:true                   
               };

        default:
            return state;
    }
}

export default articleReducer;