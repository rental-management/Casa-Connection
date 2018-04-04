import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material UI Imports
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class AddServicesForm extends Component {
    constructor(){
        super();

        this.state = {
            location: [],
            type: [],
            date: [],
            cost: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){


    }




        render(){

           
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
                    <TextField floatingLabelText="Property Location" onChange={e => {
                        this.setState({ location: e.target.value });
                      }} />
                    <br />
                    <TextField floatingLabelText="Type" onChange={e => {
                        this.setState({ type: e.target.value });
                      }} />
                    <br />
                    <TextField floatingLabelText="Date" onChange={e => {
                        this.setState({ date: e.target.value });
                      }} />
                    <br />
                    <TextField floatingLabelText="Cost" onChange={e => {
                        this.setState({ cost: e.target.value });
                      }} />
                    <br />

                    <RaisedButton label="Submit" />
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

export default connect( mapStateToProps ) ( AddServicesForm );