import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';
<<<<<<< HEAD
 
=======
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
>>>>>>> master


ReactDOM.render(
<MuiThemeProvider>
 <Provider store={store}>
   <Router>
      <App />
  </Router>
 </Provider>
</MuiThemeProvider>, 
document.getElementById('root'));

