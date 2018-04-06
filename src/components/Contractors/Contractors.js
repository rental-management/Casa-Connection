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

    handleDelete

    render() {
        const contractorsData = this.props.contractors.contractors;
        let contractorsList;
        if(contractorsData !== undefined && contractorsData.length !== 0) {
            contractorsList = [].concat(contractorsData)
            .sort((a, b) => a.company_name > b.company_name)
            .map((curr, index) => {
                return(
                    <div key={index}>
                     <h1> {curr.company_name} </h1>
                     <h2> {curr.f_name} {curr.l_name} </h2>
                    </div>
                )
            })
        }
        
        return(
            <div>
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
