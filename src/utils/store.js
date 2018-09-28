import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { loadUser } from "redux-oidc";
import rootReducer from "../_reducers";
import { UserManager, oidcProvider } from "../utils/oidc";
import { loggerMiddleware } from "../utils/redux_middleware";

const initialState = {};

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(applyMiddleware(loggerMiddleware, routerMiddleware(history)))
);

const userManager = (function getUserManager() {
  let storedProvider = localStorage.getItem("Provider");
  storedProvider =
    storedProvider == null ? oidcProvider.AzureAd : storedProvider;
  let providers = {
    Google: function() {
      return UserManager.getInstance(storedProvider);
    },
    AzureAd: function() {
      return UserManager.getInstance(storedProvider);
    }
  };
  return providers[storedProvider]();
})();

loadUser(store, userManager);

export { store, userManager, history };
