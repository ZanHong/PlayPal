import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NoMatch from "../pages/NoMatch";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "homepage"]} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}