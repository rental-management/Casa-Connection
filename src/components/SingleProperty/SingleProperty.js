import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getProperty} from '../../ducks/propertiesReducer';

import NavBar from '../NavBar/NavBar';

class SingleProperty extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProperty(this.props.match.params.id);
    }

    render() {
        let property;
        console.log(this.props, "single property render")
        if(this.props.properties.property !== undefined && this.props.properties.property.length !==0) {
            property = this.props.properties.property.map((curr, index) => {
                return (
                    <div key = {index}>
                        <h1>{curr.prop_name}</h1>
                    </div>
                )
            })
        }
        return(
            <div> Single Property Page
            <NavBar />
            {property}
            </div>
            
        )
    }
}


const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
};

export default connect(mapStateToProps, {getProperty})(SingleProperty);