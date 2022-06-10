import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/MoviesListing";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import MoviesPage from "./containers/MoviesListing";
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MoviesPage} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
