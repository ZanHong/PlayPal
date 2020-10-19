import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NoMatch from "../pages/NoMatch";
import Account from "../pages/Account";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/account"} component={Account} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}