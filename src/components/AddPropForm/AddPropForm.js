import React, {Component} from 'react';
import {connect} from 'react-redux';
//material ui imports
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//local imports
import {addProperty} from './../../ducks/propertiesReducer';


class AddPropForm extends Component {
constructor(){
    super();
    this.state = {
        propertyName: [],
        street: [],
        city: [],
        state: [],
        zip: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);


}

handleSubmit(propertyName, street, city, state, zip){
    console.log(this.state);
    this.props.addProperty();
}

render(){
    console.log('form info: ', this.props.properties);
    //userId, propertyName, street, city, state, zip
const {propertyName, street, city, state, zip} = this.state;


//Material Ui Inline Styles
const style = {
    height: 'auto',
    width: '80%',
    margin: 'auto',
    padding: 30

}
    return(
        <div>
            <h1>Add A Property</h1>
            <Paper zDepth = {3} style = {style}>
            <form>
                <TextField
                floatingLabelText="Property Name" onChange = {e => {this.setState({propertyName: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="Street" onChange = {e => {this.setState({street: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="City" onChange = {e => {this.setState({city: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="State" onChange = {e => {this.setState({state: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="Zipcode" onChange = {e => {this.setState({zip: e.target.value})}}/>
                <br />
                <RaisedButton label = "Submit" onClick = {() => {this.handleSubmit(propertyName, street, city, state, zip)}}/>
                
            </form>
            </Paper>
        
        
        
        </div>
    );
}


}

const mapStateToProps = state => {
return {
    properties: state.propertiesreducer,
    state
}
};

export default connect(mapStateToProps, {addProperty})(AddPropForm); 