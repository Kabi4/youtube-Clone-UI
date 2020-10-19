import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Siderbar from "./Sidebar/Siderbar";
import Videos from "./Vedios/Videos";
import { Redirect, Route, Switch } from "react-router-dom";
import SearchResults from "./SearchResults/SearchResults";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__body">
          <Siderbar />
          <Switch>
            <Route path="/search/:searchInput">
              <SearchResults/>
            </Route>
            <Route path="/" exact>
              <Videos />
            </Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
