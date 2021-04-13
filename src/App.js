import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Stories from "./components/Stories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stories">
          <Stories />
        </Route>
        <Route path="/visit">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
