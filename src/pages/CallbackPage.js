import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import { UserManager } from "../utils/oidc";

class CallbackPage extends React.Component {
  render() {
    const userManager = UserManager.getInstance();
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={() => this.props.dispatch(push("/"))}
        errorCallback={error => {
          this.props.dispatch(push("/"));
          /* eslint-disable no-console */
          console.error(error);
        }}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

const connectedCallbackPage = connect()(CallbackPage);
export { connectedCallbackPage as CallbackPage };
