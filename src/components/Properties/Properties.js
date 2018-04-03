import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
<<<<<<< HEAD
import AddPropForm from './../AddPropForm/AddPropForm';
=======
import {connect} from 'react-redux';
import {getProperties} from './../../ducks/propertiesReducer';

>>>>>>> master

class Properties extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProperties();
    }

    render() {
        let propertiesList;
        console.log(this.props);
        if(this.props.properties.properties.length !== undefined && this.props.properties.properties.length !== 0) {
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                    <div key={index}>
                     <h1> {curr.prop_name} </h1>
                    </div>
                )
            })
        }
        return(
<<<<<<< HEAD
            <div>
            <div> Properties Page </div>
            <AddPropForm />
            
            <PdfUploader />
            </div>
          
=======
            <div> {propertiesList} </div>
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