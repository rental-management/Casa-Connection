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
    workOrderArr = workOrderArr.sort(function(a,b) {
        if(a !== undefined && b !== undefined){
let textA = a.prop_name.toUpperCase();
let textB = b.prop_name.toUpperCase();
return textA < textB ? -1 : textA > textB ? 1 : 0; 
        }            
    });
    
    workOrdersList = workOrderArr.map((curr, index) => {        

        return(
            <div key = {index}>
            <div className="work-order-container">
                <h2 className="work-order-prop-name">{curr.prop_name}</h2>
                    <div className="type-memo">
                        <span className="type"> {curr.type}</span><br/>
                        <span className="memo"> {curr.memo}</span>
                    </div>
                <span className="delete-work-order"> X </span>
            </div>
        </div>);
    })


}

        return(
            <div>
               <NavBar />     
               <h1 className="work-orders"> Work Orders </h1>   
               <hr className="wo-line" align="left" />     
               <div className="work-orders-list"> {workOrdersList} </div>                    
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return  {properties: state.propertiesReducer};
}

export default connect(mapStateToProps, {getAllWorkOrders})(WorkOrders);