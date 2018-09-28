import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as oidcReducer } from "redux-oidc";

const rootReducer = combineReducers({
  routing: routerReducer,
  oidc: oidcReducer
});

export default rootReducer;
