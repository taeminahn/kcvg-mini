import { HYDRATE } from "next-redux-wrapper";
import {combineReducers} from "redux";
import auth from "./auth";

const rootReducer = combineReducers({
  index: (state = {}, action) => { // HYDRATE를 위한 index reducer
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload
        };

      default:
        return state;
    }
  },
  auth,
});

export default rootReducer;