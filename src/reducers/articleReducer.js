import {FETCHED_ARTICLES} from '../actions/types';

const initialState = {
   articles:[],
    Loaded: false,
};
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_ARTICLES:
           return {
               articles: action.payload.data,
               loading:false
           };

        default:
            return state;
    }
}

export default articleReducer;