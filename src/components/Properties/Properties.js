import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import {connect} from 'react-redux';
import AddPropForm from '../AddPropForm/AddPropForm';
import {getProperties} from './../../ducks/propertiesReducer';


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
            <div> 
            {propertiesList}        
            <AddPropForm/>
             </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
};
export default connect(mapStateToProps, {getProperties})(Properties);