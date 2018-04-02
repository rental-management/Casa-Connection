import React, { Component } from 'react';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="routes">
         {routes}
        </div>        
      </div>
    );
  }
}

export default App;
