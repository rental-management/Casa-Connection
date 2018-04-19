import React, {Component} from 'react';

import AddPropForm from './../AddPropForm/AddPropForm';
import NavBar from './../NavBar/NavBar';
import {connect} from 'react-redux';
import {getProperties, deleteProperty, deleteAllWOByProp} from './../../ducks/propertiesReducer';
import {deleteContractorsByProp} from './../../ducks/contractorsReducer';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import Footer from '../Footer/Footer';


class Properties extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        
    }

    componentDidMount() {
        this.props.getProperties();
        
        
    }

    handleDelete(propId, propName){
        this.props.deleteAllWOByProp(propId).then( () => {
            this.props.deleteContractorsByProp(propName);
        }).then( () => {
            this.props.deleteProperty(propId)
            .then( () => {
                this.props.getProperties();
            })
        })
    }


    render() {
        let propertiesList;
        if(this.props.properties.properties !== undefined && this.props.properties.properties.length !== 0) {
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                  <div className="individual-property" key={index}>
                    <Link to = {`/property/${curr.id}`} key = {index} >
                      <h1 className="properties-name"> {curr.prop_name.toUpperCase()} </h1>
                       <div className="crop-properties-img"> <img className="properties-img" src={curr.img} /> </div>
                    </Link>
                       <div className = 'delete-prop-btn' onClick = {() => {this.handleDelete(curr.id, curr.prop_name)}}><FontAwesome size='2x' className="far fa-times-circle" /> </div>
                  </div>
                )
            })
        }
        return(

            <div className="properties-container">
              <NavBar />
                <div className="properties-header"> 
                  <h1> Properties </h1>
                  <AddPropForm />
                </div>
                <div className="propertiesList">
                  {propertiesList} 
                </div> 
              <Footer />        
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer,
        deletedContractors: state.contractorsReducer
    }
};
export default connect(mapStateToProps, {getProperties, deleteProperty, deleteAllWOByProp, deleteContractorsByProp})(Properties);