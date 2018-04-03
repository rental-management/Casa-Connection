import React, {Component} from 'react';
import PdfUploader from './../ImageUploader/PdfUploader';
import {connect} from 'react-redux';
import {getProperties} from './../../ducks/propertiesReducer';


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
            <div> {propertiesList} </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
};
export default connect(mapStateToProps, {getProperties})(Properties);