import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';
import NavBar from '../NavBar/NavBar';
import {getWorkOrders} from './../../ducks/propertiesReducer';
import ExpenseChart from './../Charts/ExpenseChart';

class WorkOrders extends Component {
    constructor(){
        super();
    };

    componentDidMount(){
        this.props.getWorkOrders();


    }

    
    
    render() {
        console.log("work orders on props", this.props);
let workOrderArr = this.props.properties.workOrders;
let workOrdersList;
if(workOrderArr.length !== 0 && workOrderArr !== undefined){
    workOrdersList = workOrderArr.map((curr, index) => {
        return(<div key = {index}>
            <h2>{curr.type}</h2>
            <h3>{curr.memo}</h3>
        </div>);
    })


}

        return(
            <div>
               <NavBar />             
               {/* <AddWorkOrderForm />              
               {workOrdersList} */}

               <ExpenseChart />
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return  {properties: state.propertiesReducer};
}

export default connect(mapStateToProps, {getWorkOrders})(WorkOrders);