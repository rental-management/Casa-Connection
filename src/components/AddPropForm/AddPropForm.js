import React, {Component} from 'react';
import {connect} from 'react-redux';
//material ui imports
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
        img: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImg = this.handleImg.bind(this);

}


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
const {propertyName, street, city, state, zip, img} = this.state;


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
                <RaisedButton label = "Submit" onClick = {() => {this.handleSubmit(propertyName, street, city, state, zip, img)}}/>
                
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

export default connect(mapStateToProps, {addProperty, getProperties})(AddPropForm); 
