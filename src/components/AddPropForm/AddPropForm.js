import React, {Component} from 'react';
import {connect} from 'react-redux';
//material ui imports
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';


import PdfUploader from './../ImageUploader/PdfUploader';



//local imports
import {addProperty, getProperties} from './../../ducks/propertiesReducer';


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


handleSubmit(propertyName, street, city, state, zip, img){
    console.log(this.state);
    this.props.addProperty(propertyName, street, city, state, zip, img).then( (res) => {
        this.props.getProperties();
    });
}

handleImg(img){
    console.log('This is img passed up from child: ', img);
    this.setState({ img: img })
    console.log(this.state, "img state")
}


render(){
    console.log('form info: ', this.props.properties);
    //userId, propertyName, street, city, state, zip
const {propertyName, street, city, state, zip, img, open} = this.state;


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
    return(
        <div>
            <RaisedButton primary="true" onClick={this.handleClickOpen}>Add Property</RaisedButton>
                <Dialog
                contentStyle={customContentStyle}
                
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">
              
               
                    
            
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
               
                
            
       
              
                    
                        <RaisedButton onClick={this.handleClose} label="Cancel" secondary="true" />
                        <RaisedButton label="Submit" onClick = {() => {this.handleSubmit(propertyName, street, city, state, zip, img)}}/>
                 
            </Dialog>
        
        
        
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

export default connect(mapStateToProps, {addProperty, getProperties})(AddPropForm); 
