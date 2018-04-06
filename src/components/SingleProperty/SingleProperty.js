import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProperty, getWorkOrders, getExpensesById} from '../../ducks/propertiesReducer';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';
import AddExpensesForm from '../AddExpensesForm/AddExpensesForm';
import NavBar from '../NavBar/NavBar';


class SingleProperty extends Component {
    constructor(props) {
        super(props);
    }
lol
    componentDidMount() {
        const {id} = this.props.match.params;       
        this.props.getProperty(id).then(res => {
            this.props.getWorkOrders(id);
            this.props.getExpensesById(id);
        });
    }

    render() {    
      
        
        let property;    
        let workOrdersList;
        let expensesList;   
        if(this.props.properties.property !== undefined && this.props.properties.property.length !==0) {
            property = this.props.properties.property.map((curr, index) => {              
                return <div key={index}>
                    <h1>{curr.prop_name}</h1>
                    <span>Street: {curr.street}</span>
                    <br />
                    <span>City: {curr.city}</span>
                    <br />
                    <span>State: {curr.state}</span>
                    <br />
                    <span>Zipcode: {curr.zip}</span>                   
                  </div>;
            })
             workOrdersList = this.props.properties.workOrders.map( (curr, index) => {
                return <div key = {index}>
                <span>Repair type: {curr.type}</span><br />
                <span>Memo: {curr.memo}</span><br />
                </div>
            })
            expensesList = this.props.properties.singlePropExpenses.map( (curr, index) => {
                console.log("expensesList: ", curr);
                return <div key={index}>
                    <span>
                      Assessed Property Value: {curr.assessed_value}
                    </span>
                    <br />
                    <span>Down Payment: {curr.down_payment}</span>
                    <br />
                    <span>Monthly Mortgage: {curr.monthly_mortgage}</span>
                    <br />
                    <span>Monthly Dues: {curr.monthly_dues}</span>
                    <br />
                    <span>Monthly Taxes: {curr.monthly_taxes}</span>
                    <br />
                    <span>Monthly Insurance:{curr.monthly_insurance}</span>
                    <br />
                    <span>Monthly Utilities: {curr.monthly_utilities}</span>
                    <br />
                  </div>;
            })
        }
        
        return(
            <div> 
            <NavBar />
            {property}
            <AddWorkOrderForm />
            <AddExpensesForm />
            <h2>Open Work Orders</h2>
            {workOrdersList}
            <h2>Expenses for this Property:</h2>
            {expensesList}
            </div>
            
        )
    }
}


const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
};

export default connect(mapStateToProps, {getProperty, getWorkOrders, getExpensesById})(SingleProperty);