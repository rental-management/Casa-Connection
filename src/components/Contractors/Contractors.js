import React, {Component} from 'react';
import AddContractorForm from '../AddContractorForm/AddContractorForm'
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { getContractors, deleteContractor } from '../../ducks/contractorsReducer';
import { getProperties } from '../../ducks/propertiesReducer';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { DropDownMenu, MenuItem } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';


class Contractors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propName: [],
            compName: [],
            type: [],
            firstName: [],
            lastName: [],
            phone: [],
            email: [],
            street: [],
            city: [],
            state: [],
            zip: [],
        }
    }

    componentDidMount() {
        this.props.getContractors();
        this.props.getProperties();
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
                        <Card>
                            <CardHeader
                                title={curr.company_name}
                                subtitle={curr.type + " - " + curr.prop_name}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <CardText expandable={true}>

                              <span>First: </span>
                                <TextField 
                                defaultValue={curr.f_name} 
                                id="text-field-controlled" 
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ firstName: event.target.value }) 
                              }} />
            
                              <br />
            
                              <span>Last: </span>
                              <TextField 
                                defaultValue={curr.l_name}  
                                id="text-field-controlled"
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ lastName: event.target.value })
                              }} />

                              <br />

                              <span>Phone: </span>
                                <TextField 
                                defaultValue={curr.phone} 
                                id="text-field-controlled" 
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ phone: event.target.value }) 
                              }} />

                              <br />

                              <span>Email: </span>
                                <TextField 
                                defaultValue={curr.email}  
                                id="text-field-controlled"
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ email: event.target.value })
                              }} />

                              <br />

                              <span>Street: </span>
                                <TextField 
                                defaultValue={curr.street} 
                                id="text-field-controlled" 
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ street: event.target.value }) 
                              }} />

                              <br />

                              <span>City: </span>
                                <TextField 
                                defaultValue={curr.city}  
                                id="text-field-controlled"
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ city: event.target.value })
                              }} />

                              <br />

                              <span>State: </span>
                              <TextField 
                                defaultValue={curr.state} 
                                id="text-field-controlled" 
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ state: event.target.value }) 
                              }} />

                              <br />

                              <span>Zip: </span>
                                <TextField 
                                defaultValue={curr.zip}  
                                id="text-field-controlled"
                                onChange={ (event) => {
                                console.log(event.target.value)
                                this.setState({ zip: event.target.value })
                              }} />

                              <br />

                              <CardActions>
                                <FlatButton label="Update" />
                              </CardActions>
                              
                              </CardText>
                    
                        </Card>
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
        contractors: state.contractorsReducer,
        properties: state.propertiesReducer
    }
};
export default connect(mapStateToProps, {getContractors, deleteContractor, getProperties})(Contractors);
