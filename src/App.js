import React, { Component } from 'react';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';

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
