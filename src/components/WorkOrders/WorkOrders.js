import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';

import NavBar from '../NavBar/NavBar';
import AddExpensesForm from '../AddExpensesForm/AddExpensesForm';


class WorkOrders extends Component {
    render() {
        return(
            <div>
            <div> Work Orders </div>
               <NavBar />
               {/* <PdfUploader /> */}
               <AddWorkOrderForm />
               <AddExpensesForm />
            </div>
            
        )
    }
}
export default WorkOrders;