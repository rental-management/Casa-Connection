import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {addContractor, getContractors} from '../../ducks/contractorsReducer';


class AddContractorForm extends Component {
    constructor(){
        super();
        this.state = {
            compName: [],
            type: [],
            firstName: [],
            lastName: [],
            phone: [],
            email: [],
            street: [],
            city: [],
            state: [],
            zip: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(compName, type, firstName, lastName, phone, email, street, city, state, zip){
    console.log(this.state);
    this.props.addContractor(compName, type, firstName, lastName, phone, email, street, city, state, zip).then( (res) => {
        this.props.getContractors();
    });
}




render(){

const { compName, type, firstName, lastName, phone, email, street, city, state, zip} = this.state;

const style = {
    height: 'auto',
    width: '80%',
    margin: 'auto'

}

    return(
        <div>
            <h1>Add A Contractor</h1>
            <Paper zDepth = {3} style = {style}>
            <form>
                <TextField
                floatingLabelText="Company Name" onChange = {e => {this.setState({compName: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="Type" onChange = {e => {this.setState({type: e.target.value})}}/>
                <br />                 
                <TextField
                floatingLabelText="First Name" onChange = {e => {this.setState({firstName: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="Last Name" onChange = {e => {this.setState({lastName: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="Phone" onChange = {e => {this.setState({phone: e.target.value})}}/>
                <br />
                <TextField
                floatingLabelText="Email" onChange = {e => {this.setState({email: e.target.value})}}/>
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
                <RaisedButton label = "Submit" onClick = {() => {this.handleSubmit(compName, type,firstName, lastName, phone, email, street, city, state, zip)}}/>
                
            </form>
            </Paper>              
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        contractors: state.contractorsReducer
    }
};
export default connect(mapStateToProps, {addContractor, getContractors})(AddContractorForm); 
    


