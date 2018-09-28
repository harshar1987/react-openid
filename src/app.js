import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import { routes } from "./routes";
import { store, userManager, history } from "./utils";

const App = () => {
  return (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </OidcProvider>
    </Provider>
  );
};

App.prototypes = {
  history: PropTypes.object
};

export default App;
