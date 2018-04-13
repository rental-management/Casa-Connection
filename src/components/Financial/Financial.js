import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getProperties } from '../../ducks/propertiesReducer';
import NavBar from '../NavBar/NavBar';
import TotalExpensesChart from '../Charts/TotalExpensesChart';
import Footer from '../Footer/Footer';
import SinglePropValue from './../Charts/SinglePropValue';


class Financial extends Component {

    constructor(){
        super();
        this.state = {
            chartData: {}
        }

    }

    componentDidMount(){
        //pull expenses from here
        this.props.getProperties();
    }

  render() {
      console.log("expenses", this.props.properties.properties);

      return(
        <div>
            <NavBar/>
            
                <h1>PROPERTIES OVERVIEW</h1>
              <div className="total-prop-contain">
              
              <TotalExpensesChart/>
                    
             </div>
             <div className="total-prop-contain">
             
                    <SinglePropValue/>
                  
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
}

export default connect(mapStateToProps, {getProperties})(Financial);