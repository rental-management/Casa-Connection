import React, {Component} from 'react';
import AddContractorForm from '../AddContractorForm/AddContractorForm'
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';

import { getContractors, deleteContractor } from '../../ducks/contractorsReducer';

class Contractors extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getContractors();
    }

    handleDelete(conId){
        this.props.deleteContractor(conId)
        .then(() => {
            this.props.getContractors();
        })
    }

    render() {
        const contractorsData = this.props.contractors.contractors;
        let contractorsList;
        if(contractorsData !== undefined && contractorsData.length !== 0) {
            contractorsList = [].concat(contractorsData)
            .sort((a, b) => a.company_name > b.company_name)
            .map((curr, index) => {
                return(
                    <div className="individual-contractor" key={index}>
                     <h1> {curr.company_name} </h1>
                     <h2> {curr.f_name} {curr.l_name} </h2>
                     <button className="delete-con-btn" onClick ={() =>
                    {this.handleDelete(curr.id)}}>Delete</button>
                    </div>
                )
            })
        }
        
        return(
            <div>
            <NavBar />
            <div className="contractors-header">
                <h1> My Contractors </h1>
                <AddContractorForm />
            </div>
            <span className="contractors-list">
            {contractorsList}
            </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contractors: state.contractorsReducer
    }
};
export default connect(mapStateToProps, {getContractors, deleteContractor})(Contractors);
