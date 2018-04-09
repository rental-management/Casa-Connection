import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
            zip: [],
            value: 1,
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    this.props.getProperties();
}

handleClickOpen = () => {
    this.setState({open: true});
}

handleClose = () => {
    this.setState({open: false});
}

handleChange = (event, index, value) => {
    this.setState({value});
    console.log(this.props.properties.properties[value].prop_name)
    let propName = this.props.properties.properties[value].prop_name
    this.setState({propName: propName});
}


handleSubmit(propName, compName, type, firstName, lastName, phone, email, street, city, state, zip){
    console.log(this.state);
    console.log(propName);
    this.props.addContractor(propName, compName, type, firstName, lastName, phone, email, street, city, state, zip).then( (res) => {
        this.props.getContractors();
    });
}


render(){

    let propertiesList;
        if(this.props.properties.properties !== undefined && this.props.properties.properties.length !== 0) {
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                     <MenuItem value={index} key={index} primaryText={curr.prop_name}/>
                )
            })
        }

    const { propName, compName, type, firstName, lastName, phone, email, street, city, state, zip} = this.state;

    const style = {
        marginRight: -50
    }

    const customContentStyle = {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        padding: 30
    }

    return(
        <div>

            <FloatingActionButton style={style} secondary={true} onClick={this.handleClickOpen}>
            <ContentAdd />
            </FloatingActionButton>
                <Dialog
                contentStyle={customContentStyle}
                autoScrollBodyContent={true}
                open={this.state.open}
                onClose={this.handleClose}
                >

                <h1>Add A Contractor</h1>
            
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
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
                <RaisedButton onClick={this.handleClose} label="Cancel" secondary="true" />
                <RaisedButton label = "Submit" onClick = {() => {this.handleSubmit(propName, compName, type, firstName, lastName, phone, email, street, city, state, zip)}}/>  
                </Dialog>           
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
    


