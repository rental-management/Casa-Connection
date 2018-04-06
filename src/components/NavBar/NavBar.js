import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
import DropDownMenu from 'material-ui/DropDownMenu';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue900} from 'material-ui/styles/colors';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 1
        
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  handleChange = (event, index, value) => this.setState({value});

  render() {

    const style = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '0',
    };

    const muiTheme = getMuiTheme({
      palette: {
          primary2Color: blue900,
      }
  })



    return (
      <div>


<div style={style}>
<Toolbar style={style}>
  
  <div>
  <MuiThemeProvider muiTheme={muiTheme}>
  <IconMenu iconButtonElement={<IconButton className="hamburger"> <i class="material-icons">&#xE5D2;</i> </IconButton>}>
      <MenuItem primaryText = { <Link to="/properties" > Properties </Link> } />
      <MenuItem primaryText = { <Link to="/workorders" > Work Orders </Link> } />
      <MenuItem primaryText = { <Link to="/contractors" > Contractors </Link> } />
      <MenuItem primaryText = { <Link to="/contact" > Contact </Link> } />
 </IconMenu>
</MuiThemeProvider>
 </div>

 <div className="full-screen-menu">
 <MuiThemeProvider muiTheme={muiTheme}> 
           
        <Link to="/properties">
            <MenuItem muiTheme={muiTheme} value={1} onClick={this.handleClose}>Properties</MenuItem>
        </Link>
        <Link to="/workorders">
          <MenuItem value={2} onClick={this.handleClose}>Work Orders</MenuItem>
        </Link>
      
        <Link to="/contractors">
          <MenuItem onClick={this.handleClose}>Contractors</MenuItem>
        </Link>
  </MuiThemeProvider>      
  </div>

</Toolbar>
</div>
       </div> 
    );
  }
}

export default NavBar;

