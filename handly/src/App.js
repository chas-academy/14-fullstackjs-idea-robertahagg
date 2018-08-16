import React, { Component } from 'react';
import './App.css';
// import {Login, Register} from './Components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  AddToDo,
  AdminDashboard,
  AdminLogin,
  ListView,
  Login,
  Progress,
  Register,
  Search

} from "./Components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello im a react app </h1> 
        
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/addtodo" component={AddToDo} />
          {/* <Route path="/explore/:id" component={ExploreImageDetail} /> */}
          <Route path="/listview" component={ListView} />
          <Route path="/progress" component={Progress} />
          <Route path="/search" component={Search} />
          <Route path="/admin" component={AdminLogin} />
          <Route exact path="/admin-dashboard" component={AdminDashboard} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
