import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { getExpensesById } from './../../ducks/propertiesReducer';

class ExpenseChart extends Component {
    constructor(){
        super();
        this.state = {
            chartData: {}
        }
    } 

    render(){
        console.log("chart!!!!!!", this.props)
      
        let chartData = this.props.properties.property;
        let newChartData;
        if(chartData.length !== 0 && chartData !== undefined){
            // this.getChartData()
            // newChartData = chartData.map((curr, i) => {
                // console.log(curr, "CURR")
             newChartData  = (
                   <div className="chart" >
                   <div>
                   <Doughnut
                      data={{labels: [
                        'Assessed Value',
                        'Down Payment',
                        'Monthly Dues',
                        'Monthly Insurance',
                        'Monthly Mortgage',
                        'Monthly Taxes',
                        'Monthly Utilities'
                    ],
                    datasets: [
                        {
                            label: 'Property Expenses',
                           
                            data: [
                               this.props.properties.property[0].assessed_value,
                               this.props.properties.property[0].down_payment,
                               this.props.properties.property[0].monthly_dues,
                               this.props.properties.property[0].monthly_insurance,
                               this.props.properties.property[0].monthly_mortgage,
                               this.props.properties.property[0].monthly_taxes,
                               this.props.properties.property[0].monthly_utilities
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
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
                              text: this.props.properties.property[0].prop_name,
                              fontSize: 25
                          }
                          }}/>
</div>

                    {/* <h5>{curr.prop_name}</h5> */}
                    {/* <span>Dues: {curr.monthly_dues}</span> */}
                   </div>
               ) 
            // })
        }
        return(
            <div>
            
           {chartData.length > 0 && newChartData}
            
                </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    };
}

export default connect(mapStateToProps, { getExpensesById })(ExpenseChart);
