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
        let chartData = this.props.properties.property;
        let newChartData;
        if(chartData.length !== 0 && chartData !== undefined){
                  
             newChartData  = (
                 
                <div className="single-prop-chart">
                   
                   <Pie
                      data={{labels: [
                        'Monthly Dues',
                        'Monthly Insurance',
                        'Monthly Mortgage',
                        'Monthly Taxes',
                        'Monthly Utilities'
                    ],
                    datasets: [
                        {
                    
                           
                            data: [
                               chartData[0].monthly_dues,
                               chartData[0].monthly_insurance,
                               chartData[0].monthly_mortgage,
                               chartData[0].monthly_taxes,
                               chartData[0].monthly_utilities
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
                              text: 'Monthly Expenses',
                              fontSize: 25,
                          },
                          maintainAspectRatio: true,
                       
                          }}/>
            
        
</div>
   
              
               ) 
        
        }
        return(
            <div className="chart-contain">
             
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
