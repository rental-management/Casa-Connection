import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import AddPropForm from './../AddPropForm/AddPropForm';

class Properties extends Component {

    render() {

        return(
            <div>
            <div> Properties Page </div>
            <AddPropForm />
            
            <PdfUploader />
            </div>
          
        )
    }
}
export default Properties;