import React, { Component } from 'react';
import { Bar, Line, Pie} from 'react-chartjs-2';

class Profitability extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                
            
                datasets:[{
                    
                        label:'Gains',
                        data:[ 1200, 1050, 2500, 870, 1500, 2100],
                        backgroundColor:[
                            "rgba(255, 99, 132, 0.5)",
                            "rgba(54, 162, 235, 0.5)",
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'],
                        }, {
                        label: 'Losses',
                        data:[350, 790, 1100, 1350, 1000, 970],
                        backgroundColor:[
                            "rgba(255, 99, 132, 0.5)",
                            "rgba(54, 162, 235, 0.5)",
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'],
                        }],
                        labels: [
                            'Services',
                            'Utility Increase',
                            'Security Deposits',
                            'Rent Increase',
                            'Tenant Late Fees',
                            'Insurance'
                            ],

                        }
                    }}
                
            
            render(){
                return(
                    <div className="prof-chart">
                        <Bar
                            data={this.state.chartData}
                             />
                    </div>
                )
            }
        }
        export default Profitability;