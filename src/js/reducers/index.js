import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
  articles : []
};

function rootReducer (state = initialState, action){
    if (action.type === ADD_ARTICLE) {

        // Creating a copy of state and returning to make initial state immutable
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;