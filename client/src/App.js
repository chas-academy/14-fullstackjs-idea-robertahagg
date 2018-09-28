import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Authentication from "./Authentication";

import { TodosList, MainBottomNavigation } from "./Containers/";
import { AdminDashboardUsers } from "./Containers/";

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import {
  AddToDo,
  AdminLogin,
  Login,
  LogOut,
  Register,
  Search,
  NotFoundPage,
  UserDetailView,
  TodoDetailView
} from "./Views";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faUnlock,
  faBell,
  faHome,
  faCheckCircle,
  faSearch,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faEnvelope,
  faUnlock,
  faBell,
  faHome,
  faCheckCircle,
  faSearch,
  faEdit
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Authentication.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/logout" component={LogOut} />
            <PrivateRoute path="/addtodo" component={AddToDo} />
            <PrivateRoute path="/list" component={TodosList} />
            <PrivateRoute path="/todos/:id" component={TodoDetailView} />
            <PrivateRoute path="/search" component={Search} />
            <PrivateRoute path="/admin/login" component={AdminLogin} />
            <PrivateRoute
              path="/admin/dashboard"
              component={AdminDashboardUsers}
            />
            <PrivateRoute path="/admin/users/:id" component={UserDetailView} />
            <PrivateRoute component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        <div className="bottomNavigationSpacer" />
        <MainBottomNavigation />
      </div>
    );
  }
}

export default App;
