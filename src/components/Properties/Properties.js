import React, {Component} from 'react';

import AddPropForm from './../AddPropForm/AddPropForm';
import NavBar from './../NavBar/NavBar';

import {connect} from 'react-redux';
import {getProperties, deleteProperty, deleteWorkOrders} from './../../ducks/propertiesReducer';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';



class Properties extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getProperties();
    }

    handleDelete(propId){
        this.props.deleteWorkOrders(propId)
        .then( () => {
            this.props.deleteProperty(propId)
            .then( () => {
                this.props.getProperties();
            })
        })
    }

    render() {
        let propertiesList;
        console.log(this.props);
        if(this.props.properties.properties !== undefined && this.props.properties.properties.length !== 0) {
            propertiesList = this.props.properties.properties.map((curr, index) => {
                return(
                    <div className="individual-property" key={index}>
                    <Link to = {`/property/${curr.id}`} key = {index}>
                     <h1> {curr.prop_name} </h1>
                     <img className="properties-img" src={curr.img} />
                     </Link>
                     <button className = 'delete-prop-btn' onClick = {() => {this.handleDelete(curr.id)}}>Delete</button>
                    </div>
                )
            })
        }
        return(

            <div className="properties-container">
              <NavBar />
                <div className="properties-header"> 
                  <h1> My Properties </h1>
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
        properties: state.propertiesReducer
    }
};
export default connect(mapStateToProps, {getProperties, deleteProperty, deleteWorkOrders})(Properties);