import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { TodosList } from "./containers/";

import {
  AddToDo,
  AdminDashboard,
  AdminLogin,
  Login,
  LogOut,
  Progress,
  Register,
  ListView,
  Search,
  NotFoundPage
} from "./views";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faUnlock,
  faBell,
  faHome
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faEnvelope, faUnlock, faBell, faHome);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={LogOut} />
            <Route path="/addtodo" component={AddToDo} />
            {/* <Route path="/listview/todo/:id" component={Not done yet!} /> */}
            <Route path="/list" component={TodosList} />
            <Route path="/progress" component={Progress} />
            <Route path="/search" component={Search} />
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
