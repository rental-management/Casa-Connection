import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { getProperties } from './../../ducks/propertiesReducer';

class SinglePropValue extends Component {
    constructor(){
        super();
        this.state = {
            propVals: {}
        };
    }


    render(){
        console.log("prop vals: ", this.props)
        let propVals = this.props.properties.properties;
        let newPropVals;
        let assessedVals = [];
        let propNames = [];
        if(propVals.length !== 0 && propVals !== undefined){
            newPropVals = propVals.map((curr, index) => {
                console.log("Current: ", curr);
                assessedVals.push(curr.assessed_value)
                propNames.push(curr.prop_name);
            })
            console.log("all prop names: ", propNames)
            console.log("all assessed vals: ", assessedVals)
            return (
                <div className="single-prop-chart">

                    <Pie
                        data={{
                          labels:[
                            ...propNames
                          ],
                            datasets: [
                                {
                                data:[
                                   ...assessedVals, 
                                   
                                    
                                ],
                                backgroundColor: [
                                    '#283593',
                                    '#1565C0',
                                    '#0277BD',
                                    '#00838F',
                                    '#1A237E',
                                    '#009688',
                                    '#0091EA'
                                ]
                            }
                        ]}} 
                          options={{
                              legend: {
                                  display: true,
                                  position: 'left'
                              },
                              title:{
                                display: true,
                                text: "PROPERTY VALUES",
                                fontSize: 25,
                                fontColor: '#3799d6',
                                fontFamily: 'Roboto'
                              },
                              
                              maintainAspectRatio: true,
                           
                              }}/>
                
            
    </div>
            )
        }
  

    
        return(
            <div>
          
                 {newPropVals}
                
                </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      properties: state.propertiesReducer
    };
   };
   
   export default connect(mapStateToProps, { getProperties })(SinglePropValue);