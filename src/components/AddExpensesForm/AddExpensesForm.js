import React, {Component} from 'react';
import {connect} from 'react-redux';
// MUI IMPORTS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue900 } from 'material-ui/styles/colors';
// REDUX
import { addExpenses } from '../../ducks/propertiesReducer';

class AddExpensesForm extends Component {
    constructor() {
        super();

        this.state = {
            assessedValue: [],
            downPayment: [],
            monthlyMortgage: [],
            monthlyDues: [],
            monthlyTaxes: [],
            monthlyInsurance: [],
            monthlyUtilities: [],
            open: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleSubmit(assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId) {
       
        this.props.addExpenses(assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId);
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };



 
    render(){
   
    const { assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities } = this.state;
    let propArr = this.props.properties.property;
    let propId;
  
    if(propArr.length !== 0 && propArr !== undefined) {
        propId = this.props.properties.property[0].id;
        
    }
    // CUSTOM
    const customContentStyle = {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        padding: 30,
     
    }
    // MUI COLORS
    const muiTheme = getMuiTheme({
        palette: {
            primary1Color: lightBlue900,
        }
    })

        return(
            <div> 
                <MuiThemeProvider muiTheme={muiTheme}>
                <FloatingActionButton onClick={this.handleClickOpen}>
                   <ContentAdd />
                  </FloatingActionButton>
                  <Dialog
                   contentStyle={customContentStyle}
                   autoScrollBodyContent={true}
                   open={this.state.open}
                   onClose={this.handleClose}>
                <h1> Add Expenses </h1> 
                
               

                    <TextField
                    floatingLabelText="Assessed Value" onChange = {e => {this.setState({ assessedValue: e.target.value})}} />
                    < br/>
                    <TextField
                    floatingLabelText="Down Payment" onChange = {e => {this.setState({ downPayment: e.target.value})}} />
                    < br/>
                    <TextField
                    floatingLabelText="Monthly Mortgage" onChange = {e => {this.setState({ monthlyMortgage: e.target.value})}} />
                    < br/>
                    <TextField
                    floatingLabelText="Monthly Dues" onChange = {e => {this.setState({ monthlyDues: e.target.value})}} />
                    < br/>
                    <TextField
                    floatingLabelText="Monthly Taxes" onChange = {e => {this.setState({ monthlyTaxes: e.target.value})}} />
                    < br/>
                    <TextField
                    floatingLabelText="Monthly Insurance" onChange = {e => {this.setState({ monthlyInsurance: e.target.value})}} />
                    < br/>
                    <TextField
                    floatingLabelText="Monthly Utilities" onChange = {e => {this.setState({ monthlyUtilities: e.target.value})}} />
                    < br/>
                    <br />
                    <RaisedButton onClick={this.handleClose} label="Cancel" secondary="true" />
                    <RaisedButton label="Submit" onClick = {() => {this.handleSubmit(assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId)}} />

                
                </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer,
        state
    }
}
export default connect(mapStateToProps, {addExpenses})(AddExpensesForm);