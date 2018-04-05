import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            open: false
            
        
        };

    }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
      return (
      <div className="toggle-btn">

      
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
          
        />
        <Drawer onClick={this.handleToggle} open={this.state.open}>
          <Link to="/properties">
          <MenuItem onClick={this.handleClose}>Properties</MenuItem>
          </Link>
          <Link to="/workorders">
          <MenuItem onClick={this.handleClose}>Work Orders</MenuItem>
          </Link>

            

        </Drawer>
      </div>
    );
  }
}

export default NavBar;