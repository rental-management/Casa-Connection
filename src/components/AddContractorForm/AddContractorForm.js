import react, {Component} from 'react';
import {connect} from 'react-redux';

class AddContractorForm extends Component {
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
            <h1>Add A Contractor</h1>
            <Paper zDepth = {3} style = {style}>
            <form>
                <TextField
                floatingLabelText="First Name" />
                <br />
                <TextField
                floatingLabelText="Last Name" />
                <br />
                <TextField
                floatingLabelText="Company Name" />
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
                <TextField
                floatingLabelText="Phone" />
                <br />
                <TextField
                floatingLabelText="Email" />
                <br />
                <RaisedButton label = "Submit"/>
                
            </form>
            </Paper>              
        </div>
    );

};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(AddContractorForm);


