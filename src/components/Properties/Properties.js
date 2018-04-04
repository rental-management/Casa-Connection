import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';

import AddPropForm from './../AddPropForm/AddPropForm';

import {connect} from 'react-redux';
import {getProperties} from './../../ducks/propertiesReducer';
import { Link } from "react-router-dom";



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
        if(this.props.properties.properties !== undefined && this.props.properties.properties.length !== 0) {
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                    <div key={index}>
                    <Link to = {`/property/${curr.id}`} key = {index}>
                     <h1> {curr.prop_name} </h1></Link>
                     <img src={curr.img} />
                    </div>
                )
            })
        }
        return(

            <div>
            <div> Properties Page </div>
            <AddPropForm />
            {propertiesList}        
            <PdfUploader />
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