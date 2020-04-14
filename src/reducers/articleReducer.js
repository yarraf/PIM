import {GET_TOP_ARTICLES} from '../actions/types';

const initialState={
    articles:[],
    Loaded:false,
    };
const userArticlesReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_TOP_ARTICLES:
            console.log("call action");
            return {
                articles:action.payload.data
            };
        default:
            return state;
    }
}

export default userArticlesReducer;