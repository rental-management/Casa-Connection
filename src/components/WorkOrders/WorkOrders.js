import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import AddServicesForm from '../AddServices/AddServicesForm';

class Service extends Component {
    render() {
        return(
            <div>
            <div> Service Page </div>
               {/* <PdfUploader /> */}
               <AddServicesForm />
        
            </div>
            
        )
    }
}
export default Service;