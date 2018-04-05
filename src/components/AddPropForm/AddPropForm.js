import React, {Component} from 'react';
import {connect} from 'react-redux';
//material ui imports
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'

import PdfUploader from './../ImageUploader/PdfUploader';



//local imports
import {addProperty, getProperties, addTenant } from './../../ducks/propertiesReducer';


class AddPropForm extends Component {
constructor(){
    super();
    this.state = {
        propertyName: [],
        street: [],
        city: [],
        state: [],
        zip: [],
        img: [],
        open: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

}

handleClickOpen = () => {
    this.setState({ open: true });
};

handleClose = () => {
    this.setState({ open: false });
};


handleSubmit(propertyName, street, city, state, zip, img, firstName, lastName, phone, email, emergContact, emergNum, propId){
    console.log(this.state);
    this.props.addProperty(propertyName, street, city, state, zip, img).then( (res) => {
        this.props.getProperties();
    });
    this.props.addTenant(firstName, lastName, phone, email, emergContact, emergNum, propId);
}

handleImg(img){
    console.log('This is img passed up from child: ', img);
    this.setState({ img: img })
    console.log(this.state, "img state")
}


render(){
    // console.log('form info: ', this.props.properties);
    //userId, propertyName, street, city, state, zip
const {propertyName, street, city, state, zip, img, open} = this.state;
const {firstName, lastName, phone, email, emergContact, emergNum} = this.state;

let propId = this.props;
console.log(this.props);
// if(tenantArr.length !== 0 && tenantArr !== undefined) {
//     propId = this.props.properties;
//     console.log(this.props);
// }

//Material Ui Inline Styles
// const style = {
//     height: 'auto',
//     width: '80%',
//     margin: 'auto',
//     padding: 30
// }

const customContentStyle = {
    width: '100%',
    height: 'auto',
    margin: 'auto',
    padding: 30
}

const style = {
    marginRight: -50
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
                <h1>Add Property</h1>   
            
            <PdfUploader handleImg={ this.handleImg }/>
                
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
               
                <h1> Tenant </h1> 

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
                   floatingLabelText="Emergency Contact" onChange = {e => {this.setState({emergContact: e.target.value})}}/>
                <br />
                <TextField
                   floatingLabelText="Emergency Contact Number" onChange = {e => {this.setState({emergNum: e.target.value})}}/>
                <br />
            
        
                <RaisedButton onClick={this.handleClose} label="Cancel" secondary="true" />
                <RaisedButton label="Submit" onClick = {() => {this.handleSubmit(propertyName, street, city, state, zip, img, firstName, lastName, phone, email, emergContact, emergNum, propId)}}/>
                 
            </Dialog>    
        </div>
    );
}


}

const mapStateToProps = state => {
return {
    properties: state.propertiesReducer,
    state
}
};

export default connect(mapStateToProps, {addProperty, getProperties, addTenant })(AddPropForm); 
