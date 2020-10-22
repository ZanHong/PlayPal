import React from "react";
import "./App.css";
// import Router from "./routes/Route";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { StoreProvider } from "./utils/GlobalState";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import Account from "./pages/Account";
import SearchPage from "./pages/SearchPage";
import Detail from "./pages/Detail";
import Auth from "./utils/Auth";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isUserAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
      }
    />
  )
};

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/searchpage"} component={SearchPage} />
            <PrivateRoute exact path={"/account"} component={Account} />
            <PrivateRoute exact path={"/activities/:id"} component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
