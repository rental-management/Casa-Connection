import React, {Component} from 'react';
import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {addExpenses} from '../../ducks/propertiesReducer';

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
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId) {
        console.log(this.state);
        this.props.addExpenses(assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId);
    }

 
    render(){
    console.log(this.props);
    const { assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities } = this.state;
    let propArr = this.props.properties.property;
    let propId;
    console.log(propArr);
    if(propArr.length !== 0 && propArr !== undefined) {
        propId = this.props.properties.property[0].id;
        console.log('expenses propId', propId)
    }
    const style = {
        height: 'auto',
        width: '80%',
        margin: 'auto',
        padding: 30
        
    }

        return(
            <div> 
                <h1> Add Expenses </h1> 
                <Paper zDepth = {3} style = {style}>
                <form>

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
                    <RaisedButton label="Submit" onClick = {() => {this.handleSubmit(assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId)}} />

                </form>
                </Paper>

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