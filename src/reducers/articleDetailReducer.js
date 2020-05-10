import {FETCHED_ARTICLE_INFO} from '../actions/types';

const articleDetailReducer = (state={},action)=>{
    switch(action.type){
        case FETCHED_ARTICLE_INFO:
            return {
                article:action.payload.data
            };
        default:
            return state;
    }

}

export default articleDetailReducer;