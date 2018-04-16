import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProperty, getWorkOrders, getExpensesById, getTenant, editTenant, editExpenses, deleteWorkOrders } from '../../ducks/propertiesReducer';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import ExpenseChart from './../Charts/ExpenseChart';
import RentChart from '../RentChart/RentChart';
//MUI Imports
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Footer from '../Footer/Footer';
import FontAwesome from 'react-fontawesome';




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
          rent: 0,
          isEditable: false
        }
        
        this.handleTenantEdit = this.handleTenantEdit.bind(this);
        this.handleExpensesEdit = this.handleExpensesEdit.bind(this);
        this.handleOrderDelete = this.handleOrderDelete.bind(this);
        this.handleWorkOrderRefresh = this.handleWorkOrderRefresh.bind(this);
     
    }

    

    componentDidMount() {   
      console.log("hit cdm"); 
      const { id } = this.props.match.params;          
        this.props.getProperty(id).then(res => {
            this.props.getWorkOrders(id);
            this.props.getExpensesById(id);
            this.props.getTenant(id)
              console.log(res);
              let data = this.props.properties.property[0];   
              console.log("data: ", data);       
              this.setState({
                fName: data.t_f_name,
                lName: data.t_l_name,
                phone: data.t_phone,
                email: data.t_email,
                emergContact: data.emerg_contact_name,
                emergNum: data.emerg_contact_phone,
                propValue: data.assessed_value,
                downPayment: data.down_payment,
                rent: data.rent,
                mortgage: data.monthly_mortgage,
                dues: data.monthly_dues,
                taxes: data.monthly_taxes,
                insurance: data.monthly_insurance,
                utilities: data.monthly_utilities
              })
         
  
          })



    }

  


    handleTenantEdit(fName, lName, phone, email, emergContact, emergNum, propId) {
      this.props.editTenant(fName, lName, phone, email, emergContact, emergNum, propId).then( (res) => {
        this.props.getTenant(propId);
        this.setState({isEditable: false})
      });
    }

    handleExpensesEdit(propValue, downPayment, mortgage, dues, taxes, insurance, utilities, rent, propId) {
      this.props.editExpenses(propValue, downPayment, mortgage, dues, taxes, insurance, utilities, rent, propId).then( (res) => {
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
        const {fName, lName, phone, email, emergContact, emergNum, propValue, downPayment, mortgage, dues, taxes, insurance, rent, utilities} = this.state;
      
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
                
                  <div className="crop-property-img"><img className="single-property-photo" src={curr.img} /> </div>
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
                  <TextField value={this.state.fName} id="text-field-controlled" onChange={event => {
                      this.setState({ fName: event.target.value, isEditable: true });
                    }} />
                  </div>
             
                  
                  <div>
                  <span>LAST: </span>
                  <TextField value={this.state.lName} id="text-field-controlled" onChange={event => {
                      this.setState({
                        lName: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                 

                  <div>
                  <span>PHONE: </span>
                  <TextField value={this.state.phone} id="text-field-controlled" onChange={event => {
                      this.setState({
                        phone: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                

                  <div>
                  <span>EMAIL: </span>
                  <TextField value={this.state.email} id="text-field-controlled" onChange={event => {
                      this.setState({
                        email: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                 

                  <div>
                  <span>EMERGENCY CONTACT: </span>
                  <TextField value={this.state.emergContact} id="text-field-controlled" onChange={event => {
                      this.setState({
                        emergContact: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>
                
                  <div>
                  <span>EMERGENCY CONTACT #: </span>
                  <TextField value={this.state.emergNum} id="text-field-controlled" onChange={event => {
                      this.setState({
                        emergNum: event.target.value,
                        isEditable: true
                      });
                    }} />
                    </div>
                  <br />   
              <div className="save-btn">           
                {this.state.isEditable ? 
                <RaisedButton label="Save" onClick={() => {
                    this.handleTenantEdit(fName, lName, phone, email, emergContact, emergNum, propId);
                  }} id = "tenant-btn"/>: null}
                <br />
              </div>
              </div>;
          });

          //maps over work orders which are then rendered in the return
          workOrdersList = this.props.properties.workOrders.map(
            (curr, index) => {
              return (
              <div key={index} id = 'wo-container'>
                <div className="requests" >
                  <div onClick={() => this.handleOrderDelete(curr.workorders_id, curr.prop_id)}> <FontAwesome size='2x' style={{ color: '#686868', }} className="far fa-times-circle" name = "button"/> </div>
                   <div >
                    <span>{curr.type.toUpperCase()}</span>
                    <br />
                    <span>{curr.memo}</span>
                   </div>
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
                  <span> ASSESSED VALUE:&nbsp; &nbsp;$  </span> 
                  <TextField 
                    value={this.state.propValue} 
                    id="text-field-controlled" 
                    hintText="0"
                    onChange={ (event) =>{
                     
                      this.setState({ propValue: event.target.value, isEditable: true })
                    }}  />
                  </div>
                  <br />
                  <div>
                  <span>DOWN PAYMENT:&nbsp; &nbsp;$  </span> 
                  <TextField  
                    value={this.state.downPayment} 
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
                  <span>MONTHLY RENT:&nbsp; &nbsp;$  </span> 
                  <TextField  
                    value={this.state.rent} 
                    id="text-field-controlled"
                    hintText="0"
                    onChange={ (event) => {
                    
                      this.setState({
                        rent: event.target.value,
                        isEditable: true
                      });
                    }} />
                  </div>
                  <br />

                    <div>
                  <span>MONTHLY MORTGAGE:&nbsp; &nbsp;$  </span> 
                  <TextField 
                    value={this.state.mortgage} 
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
                  <span>MONTHLY DUES:&nbsp; &nbsp;$  </span> 
                  <TextField 
                    value={this.state.dues} 
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
                  <span>MONTHLY TAXES:&nbsp; &nbsp;$ </span> 
                  <TextField 
                    value={this.state.taxes} 
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
                  <span> MONTHLY INSURANCE:&nbsp; &nbsp;$ </span> 
                  <TextField 
                    value={this.state.insurance}
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
                  <span> MONTHLY UTILITIES:&nbsp; &nbsp;$   </span> 
                  <TextField 
                    value={this.state.utilities} 
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
                <div className="save-btn">
                  {this.state.isEditable ? <RaisedButton label="save" onClick={() => {this.handleExpensesEdit(propValue, downPayment, mortgage, dues, taxes, insurance, utilities, rent, propId)}} />: null}
                  <br /> 
                </div>                 
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
               <h2 className="expenses-header">PROPERTY DATA</h2>               
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
                {/* <div className="two-charts"> */}
               <ExpenseChart />
               <RentChart />
               {/* </div> */}
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
