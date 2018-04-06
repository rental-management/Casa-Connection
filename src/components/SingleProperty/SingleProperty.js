import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProperty, getWorkOrders} from '../../ducks/propertiesReducer';
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
        });
    }

    render() {     
        console.log('Work Orders', this.props.properties.workOrders);  
        
        let property;    
        let workOrdersList;   
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
        }
        return(
            <div> 
            <NavBar />
            {property}
            <AddWorkOrderForm />
            <AddExpensesForm />
            <h2>Open Work Orders</h2>
            {workOrdersList}
            </div>
            
        )
    }
}


const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
};

export default connect(mapStateToProps, {getProperty, getWorkOrders})(SingleProperty);