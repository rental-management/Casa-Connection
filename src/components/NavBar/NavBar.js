import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DropDownMenu from 'material-ui/DropDownMenu';
import Paper from 'material-ui/Paper';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 1
        
        };

    }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {

    const style = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      display: 'inline-block',
      margin: '16px 32px 16px 0',
    };

      return (
      <div>
        <Toolbar>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
          </IconMenu>
        <ToolbarGroup firstChild={true}>

        {/* <Paper style={style}>
      <Menu> */}
      {/* <Drawer onClick={this.handleToggle} open={this.state.open}> */}
      {/* <DropDownMenu value={this.state.value} onChange={this.handleChange}> */}
          <Link to="/properties">
          <MenuItem onClick={this.handleClose}>Properties</MenuItem>
          </Link>
          <Link to="/workorders">
          <MenuItem onClick={this.handleClose}>Work Orders</MenuItem>
          </Link>
        {/* </DropDownMenu> */}
          <Link to="/about">
          <MenuItem onClick={this.handleClose}>About</MenuItem>
          </Link>
          <Link to="/contact">
          <MenuItem onClick={this.handleClose}>Contact</MenuItem>
          </Link>
      {/* </Drawer>  */}
      {/* </Menu>
    </Paper> */}
    </ToolbarGroup>

    </Toolbar>
       </div> 
    );
  }
}

export default NavBar;

