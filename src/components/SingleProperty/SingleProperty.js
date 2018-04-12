import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProperty, getWorkOrders, getExpensesById, getTenant, editTenant, editExpenses, deleteWorkOrders } from '../../ducks/propertiesReducer';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import ExpenseChart from './../Charts/ExpenseChart';
//MUI Imports
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Footer from '../Footer/Footer';




class SingleProperty extends Component {
    constructor(props) {
        super(props);

        this.state = {      
          fName: '',
          lName: '',
          phone: '',
          email: '',
          emergContact: '',
          emergNum: 0,
          propValue: 0,
          downPayment: 0,
          mortgage: 0,
          dues: 0,
          taxes: 0,
          insurance: 0,
          utilities: 0,
          isEditable: false
        }
        
        this.handleTenantEdit = this.handleTenantEdit.bind(this);
        this.handleExpensesEdit = this.handleExpensesEdit.bind(this);
        this.handleOrderDelete = this.handleOrderDelete.bind(this);
        this.handleWorkOrderRefresh = this.handleWorkOrderRefresh.bind(this);
    }

    

    componentDidMount() {    
      const { id } = this.props.match.params;          
        this.props.getProperty(id).then(res => {
            this.props.getWorkOrders(id);
            this.props.getExpensesById(id);
            this.props.getTenant(id);
        }).then(res => {
          let data = this.props.properties.property[0];          
          this.setState({
            fName: data.t_f_name,
            lName: data.t_l_name,
            phone: data.t_phone,
            email: data.t_email,
            emergContact: data.emerg_contact_name,
            emergNum: data.emerg_contact_phone
          })

        })


    }

    handleTenantEdit(fName, lName, phone, email, emergContact, emergNum, propId) {
      this.props.editTenant(fName, lName, phone, email, emergContact, emergNum, propId).then( (res) => {
        this.props.getTenant(propId);
        this.setState({isEditable: false})
      });
    }

    handleExpensesEdit(propValue, downPayment, mortgage, dues, taxes, insurance, utilities, propId) {
      this.props.editExpenses(propValue, downPayment, mortgage, dues, taxes, insurance, utilities, propId).then( (res) => {
        this.props.getExpensesById(propId);
        this.setState({isEditable: false})
      });
    }

    handleOrderDelete(id, propId) {
       this.props.deleteWorkOrders(id).then((res) => {
         this.props.getWorkOrders(propId);
       })
    }

    handleWorkOrderRefresh(propId){
      this.props.getWorkOrders(propId);
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
          const propId = this.props.match.params.id;      

          //returning all property info
          property = propertyData.map((curr, index) => {
            return (
            <div key={index} className= "property-info">
            
                <h1 className="breadcrumb"><Link style={{ color: '#686868' }} to='/properties'>PROPERTIES</Link> <i className="fas fa-angle-right"></i> {curr.prop_name.toUpperCase()}</h1><br/>
                
                  <img className="single-property-photo" src={curr.img} />
                  <br />
                  <div className="address">{curr.street.toUpperCase()} {curr.city.toUpperCase()}, {curr.state.toUpperCase()} {curr.zip} </div>
                  <br />

            </div>
            );
          });
          tenant = this.props.properties.tenant.map((curr, index) => {            
                    
            return <div key={index} className="tenant-info">  
                  
               
                  <div>
                  <span>FIRST: </span>
                  <TextField defaultValue={curr.t_f_name} id="text-field-controlled" onChange={event => {
                      this.setState({ fName: event.target.value, isEditable: true });
                    }} />
                  </div>
             
                  
                  <div>
                  <span>LAST: </span>
                  <TextField defaultValue={curr.t_l_name} id="text-field-controlled" onChange={event => {
                      this.setState({
                        lName: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                 

                  <div>
                  <span>PHONE: </span>
                  <TextField defaultValue={curr.t_phone} id="text-field-controlled" onChange={event => {
                      this.setState({
                        phone: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                

                  <div>
                  <span>EMAIL: </span>
                  <TextField defaultValue={curr.t_email} id="text-field-controlled" onChange={event => {
                      this.setState({
                        email: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                 

                  <div>
                  <span>EMERGENCY CONTACT: </span>
                  <TextField defaultValue={curr.emerg_contact_name} id="text-field-controlled" onChange={event => {
                      this.setState({
                        emergContact: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>
                
                  <div>
                  <span>EMERGENCY CONTACT #: </span>
                  <TextField defaultValue={curr.emerg_contact_phone} id="text-field-controlled" onChange={event => {
                      this.setState({
                        emergNum: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>
                  <br />   
                            
                {this.state.isEditable ? 
                <RaisedButton label="Save" onClick={() => {
                    this.handleTenantEdit(fName, lName, phone, email, emergContact, emergNum, propId);
                  }} id = "tenant-btn"/>: null}
                <br />
           
              </div>;
          });

          //maps over work orders which are then rendered in the return
          workOrdersList = this.props.properties.workOrders.map(
            (curr, index) => {
              return (
                <div key={index} id = 'wo-container'>
                <div className="requests">
                  <div>
                    <span>{curr.type}</span>
                    <br />
                    <span>{curr.memo}</span>
                  </div>
                  <div onClick={() => this.handleOrderDelete(curr.workorders_id, curr.prop_id)}> <i class="far fa-trash-alt"></i> </div>
                    <br />
                </div>
                </div>
              );
            }
          );

          //maps over expenses which are then rendered in the return
          expensesList = this.props.properties.singlePropExpenses.map(
            (curr, index) => {
              return ( 
              <div key={index} className="expenses-info">
                
                  <div> 
                  <span> ASSESSED VALUE: </span> 
                  <TextField 
                    defaultValue={curr.assessed_value} 
                    id="text-field-controlled" 
                    hintText="0"
                    onChange={ (event) =>{
                     
                      this.setState({ propValue: event.target.value, isEditable: true })
                    }} />
                  </div>
                  <br />
                  <div>
                  <span>DOWN PAYMENT: </span> 
                  <TextField  
                    defaultValue={curr.down_payment} 
                    id="text-field-controlled"
                    hintText="0"
                    onChange={ (event) => {
                    
                      this.setState({
                        downPayment: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                  <br />

                    <div>
                  <span>MONTHLY MORTGAGE: </span> 
                  <TextField 
                    defaultValue={curr.monthly_mortgage} 
                    id="text-field-controlled"
                    hintText="0"
                    onChange={(event) => {
                     
                      this.setState({
                        mortgage: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>

                  <br />

                  <div>
                  <span>MONTHLY DUES: </span> 
                  <TextField 
                    defaultValue={curr.monthly_dues} 
                    id="text-field-controlled"
                    hintText="0"
                    onChange={(event) => {
                    
                      this.setState({
                        dues: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>

                  <br />

                    <div>
                  <span>MONTHLY TAXES: </span> 
                  <TextField 
                    defaultValue={curr.monthly_taxes} 
                    id="text-field-controlled"
                    hintText="0"
                    onChange={(event) => {
                      
                      this.setState({
                        taxes: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>

                  <br />

                  <div>
                  <span> MONTHLY INSURANCE: </span> 
                  <TextField 
                    defaultValue={curr.monthly_insurance}
                    id="text-field-controlled"
                    hintText="0"
                    onChange={(event) => {
                     
                      this.setState({
                        insurance: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>

                  <br />

                  <div>
                  <span> MONTHLY UTILITIES:  </span> 
                  <TextField 
                    defaultValue={curr.monthly_utilities} 
                    id="text-field-controlled"
                    hintText="0"
                    onChange={(event) => {
                      
                      this.setState({
                        utilities: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>
                 
                  <br />
                  {this.state.isEditable ? <RaisedButton label="save" onClick={() => {this.handleExpensesEdit(propValue, downPayment, mortgage, dues, taxes, insurance, utilities, propId)}} />: null}
                  <br />                  
                </div>
              );
            }
          );
        }
        
        return(
            <div> 
            <NavBar />
          <div className="property-tenant-container">
            <div className="property-container"> 
               {property} 
            </div>

            <div className="tenant-container">
                <h2 className="tenant-header">TENANT</h2>
                {tenant}
            </div>
            
            <div className="expenses-container">
               <h2 className="expenses-header">EXPENSES</h2>
               {expensesList}  
            </div>
            <div className="work-orders-container">
              <div className="work-order-header">
                 <h2>WORK ORDERS</h2> 
                 <AddWorkOrderForm handleWorkOrderRefresh = {this.handleWorkOrderRefresh}/>
              </div>
                 {workOrdersList}
            </div>
          </div>
        <div className="wo-expenses">
          <div className="work-orders-sp">
            <div className="add-work-order">
            <AddWorkOrderForm handleWorkOrderRefresh = {this.handleWorkOrderRefresh}/>
               <h2 className="wo-h2">WORK ORDERS</h2>
            </div>
              {workOrdersList}
          </div>
          <div className="expenses-sp">
            <h2>PROPERTY DATA</h2>
            {expensesList}  
          </div>
        </div>
               <ExpenseChart />
               <Footer />  
          </div>
          
      )
  }
}


const mapStateToProps = state => {
  return {
      properties: state.propertiesReducer
  }
};

export default connect(mapStateToProps, {getProperty, getWorkOrders, getExpensesById, getTenant, editTenant, editExpenses, deleteWorkOrders})(SingleProperty);
