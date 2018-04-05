import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material UI Imports
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import {addWorkOrder} from './../../ducks/propertiesReducer';

class AddWorkOrderForm extends Component {
    constructor(){
        super();

        this.state = {
            type: [],
            memo: []
           
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(propId,type, memo){
        this.props.addWorkOrder(propId,type, memo);

    }
        render(){
            const {type, memo} = this.state;
            console.log("params id ", this.props);
             console.log("here is props - need propId" ,this.props.state.propertiesReducer.properties);
             let propertyArr = this.props.state.propertiesReducer.property;
             let propId;
             if(propertyArr.length !== 0 && propertyArr !== undefined ){
                propId = this.props.state.propertiesReducer.property[0].id;
                console.log('propId', propId);


             }
             

            //  for(let i = 0; i <propertiesArr.length; i ++){
            //      let id = propertiesArr[i].id;
            //      if (id === id){
            //          //Do something
            //      }
            //  }

            


           
            const style = {
                height: 'auto',
                width: '80%',
                margin: 'auto',
                padding: 30
            
            }
            return <div>
                <h1>Services</h1>
                <Paper zDepth={3} style={style}>
                  <form>                   
                    <TextField floatingLabelText="Type" onChange={e => {
                        this.setState({ type: e.target.value });
                      }} />
                    <br />                   
                    <TextField floatingLabelText="Memo" onChange={e => {
                        this.setState({ memo: e.target.value });
                      }} />
                    <br />

                    <RaisedButton label="Submit" onClick = {() => {this.handleSubmit(propId, type, memo)}}/>
                  </form>
                </Paper>
              </div>;
        }
    }

    function mapStateToProps(state){
        return {
            state
        }
    }

export default connect( mapStateToProps, {addWorkOrder})( AddWorkOrderForm );