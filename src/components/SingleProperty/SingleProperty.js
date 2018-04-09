import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProperty, getWorkOrders, getExpensesById, getTenant, editTenant, addProperty } from '../../ducks/propertiesReducer';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';
import AddExpensesForm from '../AddExpensesForm/AddExpensesForm';
import NavBar from '../NavBar/NavBar';
import EditableLabel from 'react-inline-editing';
//MUI Imports
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { util } from 'node-forge';


class SingleProperty extends Component {
    constructor(props) {
        super(props);

        this.state = {
          fName: '',
          lName: '',
          phone: '',
          email: '',
          emergContact: '',
          emergNum: '',
          propValue: '',
          downPayment: '',
          mortgage: '',
          dues: '',
          taxes: '',
          insurance: '',
          utilities: ''
        }
        
        this.handleTenantEdit = this.handleTenantEdit.bind(this);
        this.handleExpensesEdit = this.handleExpensesEdit.bind(this);
    }

    

    componentDidMount() {    
      const { id } = this.props.match.params;          
        this.props.getProperty(id).then(res => {
            this.props.getWorkOrders(id);
            this.props.getExpensesById(id);
            this.props.getTenant(id);
        });
    }

    handleTenantEdit(fName, lName, phone, email, emergContact, emergNum, propValue, downPayment, mortgage, dues, taxes, insurance, utilities) {
      this.props.editTenant(fName, lName, phone, email, emergContact, emergNum)
    }

    handleExpensesEdit(propValue, downPayment, mortgage, dues, taxes, insurance, utilities) {
      this.props.editExpenses(propValue, downPayment, mortgage, dues, taxes, insurance, utilities)
    }


    render() { 
      
        // destructuring state 
        const {fName, lName, phone, email, emergContact, emergNum, propValue, downPayment, mortgage, dues, taxes, insurance, utilities} = this.state;
      
        //declaring list variables
        let property;
        let propertyData = this.props.properties.property;    
        let workOrdersList;
        let expensesList;   
        let tenant;
        if (propertyData !== undefined && propertyData.length !== 0) {
          property = propertyData.map((curr, index) => {
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
          });
          tenant = this.props.properties.tenant.map((curr, index) => {
            return <div key={index}>

                <span>First: </span>
                <TextField 
                  defaultValue={curr.t_f_name} 
                  className="text-field-controlled" 
                  onChange={ (event) => {
                  console.log(event.target.value)
                  this.setState({ fName: event.target.value }) 
                  }} />

                <br />

                <span>Last: </span>
                <TextField 
                  defaultValue={curr.t_l_name}  
                  className="text-field-controlled"
                  onChange={ (event) => {
                    console.log(event.target.value)
                    this.setState({ lName: event.target.value })
                  }} />

                <br/>

                <span>Phone: </span>
                <TextField 
                  defaultValue={curr.t_phone}  
                  className="text-field-controlled" 
                  onChange={ (event) => {
                    console.log(event.target.value)
                    this.setState({ phone: event.target.value })
                  }} />

                <br />

                <span>Email: </span>
                <TextField 
                  defaultValue={curr.t_email}  
                  className="text-field-controlled" 
                  onChange={ (event) => {
                    console.log(event.target.value)
                    this.setState({ email: event.target.value })
                  }} />

                <br />

                <span>Emergency Contact: </span>
                <TextField 
                  defaultValue={curr.emerg_contact_name}  
                  className="text-field-controlled" 
                  onChange={ (event) => {
                    console.log(event.target.value)
                    this.setState({ emergContact: event.target.value })
                  }} />

                <br />

                <span>Emergency Contact #: </span>
                <TextField 
                  defaultValue={curr.emerg_contact_phone}  
                  className="text-field-controlled" 
                  onChange={ (event) => {
                    console.log(event.target.value)
                    this.setState({emergNum: event.target.value })
                  }} />

                <br />
                <RaisedButton label="Save" onClick={() => {this.handleTenantEdit(fName, lName, phone, email, emergContact, emergNum)}}  /> 
                <br />
              </div>;
          });

          //maps over work orders which are then rendered in the return
          workOrdersList = this.props.properties.workOrders.map(
            (curr, index) => {
              return (
                <div key={index}>
                  <span>Repair type: {curr.type}</span>
                  <br />
                  <span>Memo: {curr.memo}</span>
                  <br />
                </div>
              );
            }
          );

          //maps over expenses which are then rendered in the return
          expensesList = this.props.properties.singlePropExpenses.map(
            (curr, index) => {
              return (
                <div key={index}>
                  <span> Assessed Property Value: </span> 
                  <TextField 
                    defaultValue={curr.assessed_value} 
                    className="text-field-controlled" 
                    onChange={ (event) =>{
                      console.log(event.target.value)
                      this.setState({ propValue: event.target.value })
                    }} />

                  <br />

                  <span>Down Payment: </span> 
                  <TextField  
                    defaultValue={curr.down_payment} 
                    className="text-field-controlled"
                    onChange={ (event) => {
                      console.log(event.target.value)
                      this.setState({ downPayment: event.target.value })
                    }} />

                  <br />

                  <span>Monthly Mortgage: </span> 
                  <TextField 
                    defaultValue={curr.monthly_mortgage} 
                    className="text-field-controlled"
                    onChange={(event) => {
                      console.log(event.target.value)
                      this.setState({ mortgage: event.target.value})
                    }} />
                  <br />
                  <span>Monthly Dues: </span> 
                  <TextField 
                    defaultValue={curr.monthly_dues} 
                    className="text-field-controlled"
                    onChange={(event) => {
                      console.log(event.target.value)
                      this.setState({ dues: event.target.value })
                    }} />

                  <br />

                  <span>Monthly Taxes: </span> 
                  <TextField 
                    defaultValue={curr.monthly_taxes} 
                    className="text-field-controlled"
                    onChange={(event) => {
                      console.log(event.target.value)
                      this.setState({ taxes: event.target.value })
                    }} />
                  <br />
                  <span> Monthly Insurance: </span> 
                  <TextField 
                    value={curr.monthly_insurance}
                    className="text-field-controlled"
                    onChange={(event) => {
                      console.log(event.target.value)
                      this.setState({ insurance: event.target.value })
                    }} />
                  <br />
                  <span> Monthly Utilities:  </span> 
                  <TextField 
                    value={curr.monthly_utilities} 
                    className="text-field-controlled"
                    onChange={(event) => {
                      console.log(event.target.value)
                      this.setState({ utilities: event.target.value })
                    }} />
                  <br />
                  <RaisedButton label="save" onClick={() => {this.handleExpensesEdit(propValue, downPayment, mortgage, dues, taxes, insurance, utilities )}} />
                  <br />
                </div>
              );
            }
          );
        }
        
        return(
            <div> 
            <NavBar />
            {property}
            <h2>Current Tenant</h2>
            {tenant}
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

export default connect(mapStateToProps, {getProperty, getWorkOrders, getExpensesById, getTenant, editTenant})(SingleProperty);