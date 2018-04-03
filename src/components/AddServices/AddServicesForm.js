import React, { Component } from 'react';

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

export default AddServicesForm;