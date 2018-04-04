import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddContractorForm from '../AddContractorForm/AddContractorForm'

class Contractors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div>Contractors Page</div>
            <AddContractorForm />
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect (mapStateToProps)(Contractors);

