import React, { Component } from 'react';
import { Bar, Line, Pie} from 'react-chartjs-2';

class Profitability extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                
                labels: ['Services',
                'Utility Increase',
                'Security Deposits',
                'Rent Increase',
                'Tenant Late Fees',
                'Insurance'],
                datasets:[
                   
                        {
                    
                        label: "Gains",
                        data:[ 1200, 1050, 2500, 870, 1500, 2100],
                        backgroundColor:[
                            "#0097A7",
                            "#0288D1",
                            '#303F9F',
                            '#00BFA5',
                            '#C51162',
                            '#9C27B0',
                            '#880E4F'],
                        }, 
                        {
                       
                        label: "Losses",
                        data:[350, 790, 1100, 1350, 1000, 970],
                        backgroundColor:[
                            "#0097A7",
                            "#0288D1",
                            '#303F9F',
                            '#00BFA5',
                            '#C51162',
                            '#9C27B0',
                            '#880E4F'],
                        }
                    ]
                       
                        }

                    }}      
                    
                    
                
            
            render(){
                return(
                    <div className="prof-chart">
                  
                        <Bar data={this.state.chartData} options={{legend: false, title:{display: true, text: 'PROFIT', fontColor:'#3799d6', fontFamily:'Roboto', fontSize: 25}}}  />
                     </div>
                 )}}
    
        
        export default Profitability;