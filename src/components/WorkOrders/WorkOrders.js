import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';

class WorkOrders extends Component {
    render() {
        return(
            <div>
            <div> Service Page </div>
               {/* <PdfUploader /> */}
               <AddWorkOrderForm />
        
            </div>
            
        )
    }
}
export default WorkOrders;