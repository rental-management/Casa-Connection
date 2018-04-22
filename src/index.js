import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import "./styles/css/index.css";
import App from "./App";
import store from "./store";
import MuiThemeProvider from "../node_modules/material-ui/styles/MuiThemeProvider";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
