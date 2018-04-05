import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {addContractor, getContractors} from '../../ducks/contractorsReducer';
import { getProperties } from '../../ducks/propertiesReducer';
import { DropDownMenu, MenuItem } from 'material-ui';


class AddContractorForm extends Component {
    constructor(){
        super();
        this.state = {
            propName: [],
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

        this.handleProperty = this.handleProperty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    this.props.getProperties();
}

handleProperty(event, index, value){
    this.setState({propName: value})
}

handleSubmit(compName, type, firstName, lastName, phone, email, street, city, state, zip){
    console.log(this.state);
    this.props.addContractor(compName, type, firstName, lastName, phone, email, street, city, state, zip).then( (res) => {
        this.props.getContractors();
    });
}


render(){
    let propertiesList;
        console.log(this.props.properties.properties);
        if(this.props.properties.properties !== undefined && this.props.properties.properties.length !== 0) {
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                    <div key={index}>
                     <p key={index}>{curr.prop_name} </p>
                    </div>
                )
            })
            console.log(propertiesList);
        }
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
                <DropDownMenu value={this.state.value} onChange={this.handleProperty}>
                    {propertiesList}
                </DropDownMenu>
                <br />
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
                floatingLabelText="Zip code" onChange = {e => {this.setState({zip: e.target.value})}}/>
                <br />
                <RaisedButton label = "Submit" onClick = {() => {this.handleSubmit(compName, type,firstName, lastName, phone, email, street, city, state, zip)}}/>
                
            </form>
            </Paper>              
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        contractors: state.contractorsReducer,
        properties: state.propertiesReducer
    }
};
export default connect(mapStateToProps, {addContractor, getContractors, getProperties})(AddContractorForm); 
    


