import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';



class NavBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
        
    }
    
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});


    render(){
        return(
            
              <div>
                  <i
          className="fa fa-bars hamburger"
        //   aria-hidden="true"
          style={{ color: "black" }}
          onClick={this.handleDrawer}
        />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    width="60%"
                    className="header-drawer"
                    onRequestChange={this.handleDrawer}
                    containerStyle={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        paddingTop: "10%"
                    }}
                    >
                
                <MenuItem onClick={this.handleDrawer}>
                    <Link to="/">
                        <FlatButton label="Home" />
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawer}>
                    <Link to="/home">
                        <FlatButton label="Properties" />
                    </Link>
                </MenuItem>
                 <MenuItem onClick={this.handleDrawer}>
                    <Link to="/service">
                        <FlatButton label="Service" />
                    </Link>
                </MenuItem>
                </Drawer>
            </div>
                
                
            
        )
    }
}
export default NavBar;