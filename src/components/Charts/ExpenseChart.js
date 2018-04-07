import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ExpenseChart extends Component {
    constructor(props){
        super(props);

        this.state = {
            chartData: {
                labels: ['Assessed Value', 
                            'Down Payment', 
                            'Monthly Mortgage', 
                            'Monthly Dues', 
                            'Monthly Taxes', 
                            'Monthly Insurance', 
                            'Monthly Utilities'],
                datasets: [
                    {
                        label: 'Propety Expenses',
                        data: [
                            5000, 
                            2000, 
                            456, 
                            4500, 
                            2000, 
                            1000, 
                            8750
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
                ]
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <Pie
            	    data={this.state.chartData}
            	    options={{
		            
	                }}/>
                </div>
        )
    }
}

export default ExpenseChart;