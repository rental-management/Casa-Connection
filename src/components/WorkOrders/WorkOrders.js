import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';

import NavBar from '../NavBar/NavBar';
import AddExpensesForm from '../AddExpensesForm/AddExpensesForm';


class WorkOrders extends Component {
    render() {
        return(
            <div>
               <NavBar />
            <div> Work Orders </div>
               {/* <PdfUploader /> */}
               <AddWorkOrderForm />
               <AddExpensesForm />
            </div>
            
        )
    }
}
export default WorkOrders;