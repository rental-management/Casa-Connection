import React, { Component } from 'react';

import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="routes">
         {routes}
        </div>        
      </div>
    );
  }
}

export default App;
