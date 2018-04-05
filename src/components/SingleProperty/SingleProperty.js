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

    componentDidMount(propId) {
        const {id} = this.props.match.params;       
        this.props.getProperty(id).then(res => {
            this.props.getWorkOrders(propId);
        });
    }

    render() {
        let property;
        console.log(this.props, "single property render")
        if(this.props.properties.property !== undefined && this.props.properties.property.length !==0) {
            property = this.props.properties.property.map((curr, index) => {
                console.log(curr);
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
        }
        return(
            <div> Single Property Page
            <NavBar />
            {property}
            <AddWorkOrderForm />
            <AddExpensesForm />
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