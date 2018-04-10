import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { getProperties } from '../../ducks/propertiesReducer';
import NavBar from '../NavBar/NavBar';
import TotalExpensesChart from '../Charts/TotalExpensesChart';

class Financial extends Component {

    constructor(){
        super();
        this.state = {
            chartData: {}
        }

    }

    compmonentDidMount(){
        //pull expenses from here
        this.props.getProperties();
    }

  render() {
      console.log("expenses", this.props.properties);
      return(
          <div>
              <NavBar/>
              <h1>Total Expenses for All Properties</h1>
              <TotalExpensesChart/>
              </div>
      )
  }
}

const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    }
}

export default connect(mapStateToProps, {getProperties})(Financial);