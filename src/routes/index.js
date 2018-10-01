import React from "react";
import { Route, Switch } from "react-router";
import { HomePage, CallbackPage } from "../pages";

export const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/callback" component={CallbackPage} />
  </Switch>
);
