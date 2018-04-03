import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddServicesForm extends Component {
    constructor(){
        super();
    }
        render(){
            const style = {
                height: 'auto',
                width: '80%',
                margin: 'auto'
            
            }
            return (
                <div>
                    <h1>Services</h1>
            <Paper zDepth = {3} style = {style}>
            <form>
                <TextField
                floatingLabelText="Property Location" />
                <br />
                <TextField
                floatingLabelText="Type" />
                <br />
                <TextField
                floatingLabelText="Date" />
                <br />
                <TextField
                floatingLabelText="Cost" />
                <br />
             
                <RaisedButton label = "Submit"/>
                
            </form>
            </Paper>
                    </div>
            )
        }
    }

    function mapStateToProps(state){
        return {
            state
        }
    }

export default connect( mapStateToProps ) ( AddServicesForm );