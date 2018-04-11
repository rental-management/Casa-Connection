import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material UI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue900} from 'material-ui/styles/colors';
import {addWorkOrder, getWorkOrders} from './../../ducks/propertiesReducer';

class AddWorkOrderForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            type: [],
            memo: [],
            open: false
           
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
       
    }



    handleSubmit(propId,type, memo){
        this.props.addWorkOrder(propId,type, memo)
        .then( (res) => {          
            this.setState({ open: false }); 
            this.props.handleWorkOrderRefresh(propId);                               
        })
    }

    handleClose = (propId) => {
        this.setState({ open: false });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };


        render(){
            const {type, memo} = this.state;
            console.log("handleWorkOrderRefresh: ", this.props);                      
             let propertyArr = this.props.state.propertiesReducer.property;
             let propId;
             if(propertyArr.length !== 0 && propertyArr !== undefined ){
                propId = this.props.state.propertiesReducer.property[0].id;
               

             }
           
           
            // MUI COLORS
            const muiTheme = getMuiTheme({
                palette: {
                    primary1Color: lightBlue900,
                }
            })

            // CUSTOM
            const customContentStyle = {
                width: '100%',
                height: 'auto',
                margin: 'auto',
                padding: 30,
             
            }

            return <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                <FloatingActionButton onClick={this.handleClickOpen}>
                   <ContentAdd />
                  </FloatingActionButton>
                  <Dialog
                   contentStyle={customContentStyle}
                   open={this.state.open}
                   onClose={ this.handleClose}>
                <h1>Work Orders</h1>
                            
                    <TextField floatingLabelText="Type" onChange={e => {
                        this.setState({ type: e.target.value });
                      }} />
                    <br />                   
                    <TextField floatingLabelText="Memo" onChange={e => {
                        this.setState({ memo: e.target.value });
                      }} />
                    <br />
                    <br />
                    
                    <RaisedButton onClick={this.handleClose} label="Cancel" secondary="true" />
                    <RaisedButton  label="Submit" onClick = {() => {this.handleSubmit(propId, type, memo)}} />
               
                </Dialog>
                </MuiThemeProvider>
              </div>;
        }
    }

    function mapStateToProps(state){
        return {
            state
        }
    }

export default connect( mapStateToProps, {addWorkOrder})( AddWorkOrderForm );