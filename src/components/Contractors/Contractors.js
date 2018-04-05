import React, {Component} from 'react';
import AddContractorForm from '../AddContractorForm/AddContractorForm'
import {connect} from 'react-redux';

import { getContractors } from '../../ducks/contractorsReducer';

class Contractors extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getContractors();
    }

    render() {
        let contractorsList;
        console.log(this.props);
        if(this.props.contractors.contractors !== undefined && this.props.contractors.contractors.length !== 0) {
            contractorsList = this.props.contractors.contractors.map((curr, index) => {
                return(
                    <div key={index}>
                     <h1> {curr.company_name} </h1>
                    </div>
                )
            })
        }
        return(
            <div>
            <div>Contractors Page</div>
            <AddContractorForm />
            {contractorsList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contractors: state.contractorsReducer
    }
};
export default connect(mapStateToProps, {getContractors})(Contractors);
