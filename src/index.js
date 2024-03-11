import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Shortly } from "./Screens/Shortly";
import { Pokedex } from "./Screens/Pokedex";
import { Ravenous } from "./Screens/Ravenous";
import { Sverige500 } from "./Screens/Sverige500";
import ScrollToTop from "./ScrollToTop";
import { Santas } from "./Screens/Santas";
import { Farmers } from "./Screens/Farmers";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/portfolio/artkampen">
          <Shortly />
        </Route>
        <Route path="/portfolio/Farmers">
          <Farmers />
        </Route>
        <Route path="/portfolio/sverige500">
          <Sverige500 />
        </Route>
        <Route path="/portfolio/Pokedex">
          <Pokedex />
        </Route>
        <Route path="/portfolio/Ravenous">
          <Ravenous />
        </Route>
        <Route path="/portfolio/santas">
          <Santas />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
