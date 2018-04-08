import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';
import NavBar from '../NavBar/NavBar';
import {getAllWorkOrders} from './../../ducks/propertiesReducer';
import ExpenseChart from './../Charts/ExpenseChart';

class WorkOrders extends Component {
    constructor(){
        super();
    };

    componentDidMount(){
        this.props.getAllWorkOrders();


    }

    
    
    render() {        
let workOrderArr = this.props.properties.workOrders;
let workOrdersList;
if(workOrderArr.length !== 0 && workOrderArr !== undefined){
    workOrdersList = workOrderArr.map((curr, index) => {
        return(<div key = {index}>
            <h5>{curr.prop_name}</h5>
            <span>Type: {curr.type}</span><br/>
            <span>Memo: {curr.memo}</span>
        </div>);
    })


}

        return(
            <div>
               <NavBar />             
               {workOrdersList}                      

               
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return  {properties: state.propertiesReducer};
}

export default connect(mapStateToProps, {getAllWorkOrders})(WorkOrders);