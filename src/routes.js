import React from "react";
import { Switch, Route } from "react-router-dom";

import Properties from "./components/Properties/Properties";
import WorkOrders from "./components/WorkOrders/WorkOrders";
import SingleProperty from "./components/SingleProperty/SingleProperty";
import SplashLanding from "./components/SplashLanding/SplashLanding";
import Contractors from "./components/Contractors/Contractors";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Financial from "./components/Financial/Financial";

export default (
  <Switch>
    <Route exact path="/" component={SplashLanding} />
    <Route path="/properties" component={Properties} />
    <Route path="/workorders" component={WorkOrders} />
    <Route path="/property/:id" component={SingleProperty} />
    <Route path="/contractors" component={Contractors} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/financial" component={Financial} />
  </Switch>
);
