import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { addExpenses } from './../../ducks/propertiesReducer';

class ExpenseChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: props.addExpenses()
    }
    
} 
    componentDidMount() {
        this.props.addExpenses();

    }

    getChartData(){
        
        this.setState({
            chartData:{
                labels: [
                    'Assessed Value',
                    'Down Payment',
                    'Monthly Mortgage',
                    'Monthly Dues',
                    'Monthly Taxes',
                    'Monthly Insurance',
                    'Monthly Utilities'
                ],
                datasets: [
                    {
                        label: 'Property Expenses',
                        data: [
                           
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
        })
       
    }



    render(){
        let chartData = this.props.properties.singlePropExpenses;
        let newChartData;
        if(chartData.length !== 0 && chartData !== undefined){
            newChartData = chartData.map((curr, i) => {
               return(
                   <div className="chart" key={i}>
                   <Pie
                      data={this.state.chartData} />
                    {/* <h5>{curr.prop_name}</h5>
                    <span>Dues: {curr.monthly_dues}</span> */}
                   </div>
               ) 
            })
        }
        return(
            <div>

            {newChartData}
                </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        properties: state.propertiesReducer
    };
}

export default connect(mapStateToProps, {addExpenses})(ExpenseChart);