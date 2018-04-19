import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue900} from 'material-ui/styles/colors';
const {REACT_APP_LOGOUT} = process.env;


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
      textTransform: 'uppercase'
    };

    const muiTheme = getMuiTheme({
      palette: {
          primary2Color: blue900,
      }
  })

    return (
      <div>


<div style={style}>
{/* <Toolbar className="toolBar" style={style}> */}
  
  <div className="responsive-menu">
  <MuiThemeProvider muiTheme={muiTheme}>
  <IconMenu iconButtonElement={<IconButton className="hamburger" > <i className="material-icons">&#xE5D2;</i> </IconButton>}>
      <MenuItem primaryText = { <Link style={{ color: '#686868' }} to="/properties" > Properties </Link> } />
      <MenuItem primaryText = { <Link style={{ color: '#686868' }} to="/workorders" > Work Orders </Link> } />
      <MenuItem primaryText = { <Link style={{ color: '#686868' }} to="/contractors" > Contractors </Link> } />
      <MenuItem primaryText = { <Link style={{ color: '#686868' }} to="/financial" > Analytics </Link> } />
      <MenuItem primaryText = { <Link style={{ color: '#686868' }} to="/contact" > Contact </Link> } />
      <MenuItem className = 'item' primaryText = { <Link style={{ color: '#3799d6'}} to = '/'> LOGOUT </Link> } /> 
 </IconMenu>
</MuiThemeProvider>
 </div>

 <div className="full-screen-menu">
 <MuiThemeProvider muiTheme={muiTheme}> 
           
        <Link   to="/properties">
            <MenuItem  style={{ color: '#686868' }}className="item" muiTheme={muiTheme} value={1} onClick={this.handleClose}>Properties</MenuItem>
        </Link>
        <Link to="/workorders">
          <MenuItem style={{ color: '#686868' }} className="item" value={2} onClick={this.handleClose}>Work Orders</MenuItem>
        </Link>
      
        <Link to="/contractors">
          <MenuItem  style={{ color: '#686868' }}className="item" onClick={this.handleClose}>Contractors</MenuItem>
        </Link>

        <Link to="/financial">
          <MenuItem style={{ color: '#686868' }}className="item" onClick={this.handleClose}>Analytics</MenuItem>
        </Link>
        <Link to = '/'>
                <MenuItem style={{ color: '#3799d6', background: 'none', borderRadius: '6px', border: '1px solid #3799d6' }} className = 'item'>LOGOUT</MenuItem>
                </Link>


  </MuiThemeProvider>      
  </div>

{/* </Toolbar> */}
</div>

<footer>
  <Paper>
    </Paper>
  </footer>
       </div> 
    );
  }
}

export default NavBar;

