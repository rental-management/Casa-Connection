import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
<<<<<<< HEAD
import AddPropForm from './../AddPropForm/AddPropForm';
=======
import {connect} from 'react-redux';
import AddPropForm from '../AddPropForm/AddPropForm';
import {getProperties} from './../../ducks/propertiesReducer';

>>>>>>> master

class Properties extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //gets all properties
        this.props.getProperties();
    }

    render() {
        let propertiesList;
        console.log(this.props);
        if(this.props.properties.properties !== undefined && this.props.properties.properties.length !== 0) {
            console.log(this.props);
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                    <div key={index}>
                     <h1> {curr.prop_name} </h1>
                     <img src={curr.img} />
                    </div>
                )
            })
        }
        return(
<<<<<<< HEAD
<<<<<<< HEAD
            <div>
            <div> Properties Page </div>
            <AddPropForm />
            
            <PdfUploader />
            </div>
          
=======
            <div> {propertiesList} </div>
>>>>>>> master
=======
            <div> 
            {propertiesList}        
            <AddPropForm/>
             </div>
>>>>>>> master
        )
    }
}
const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
};
export default connect(mapStateToProps, {getProperties})(Properties);