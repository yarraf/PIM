import { GET_TOP_ARTICLES } from '../actions/types';


const initialState = {
    articles: [],
    Loaded: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_ARTICLES:
            console.log('test', action.payload)
            return { ...state, articles:action.payload.LISTARTICLE.slice(0,10),Loaded: true };

        default:
            return state;
    }
}