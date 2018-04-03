import React, {Component} from 'react';
//material ui imports
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class AddPropForm extends Component {
constructor(){
    super();
}

render(){
const style = {
    height: 'auto',
    width: '80%',
    margin: 'auto'

}

    return(
        <div>
            <h1>Add A Property</h1>
            <Paper zDepth = {3} style = {style}>
            <form>
                <TextField
                floatingLabelText="Property Name" />
                <br />
                <TextField
                floatingLabelText="Street" />
                <br />
                <TextField
                floatingLabelText="City" />
                <br />
                <TextField
                floatingLabelText="State" />
                <br />
                <TextField
                floatingLabelText="Zipcode" />
                <br />
                <RaisedButton label = "Submit"/>
                
            </form>
            </Paper>
        
        
        
        </div>
    );
}


}

export default AddPropForm;