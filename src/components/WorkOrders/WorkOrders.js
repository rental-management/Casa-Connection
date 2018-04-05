import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import AddWorkOrderForm from '../AddWorkOrderForm/AddWorkOrderForm';

import NavBar from '../NavBar/NavBar';


class WorkOrders extends Component {
    render() {
        return(
            <div>
            <div> Work Orders </div>
               <NavBar />
               {/* <PdfUploader /> */}
               <AddWorkOrderForm />
            </div>
            
        )
    }
}
export default WorkOrders;