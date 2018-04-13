import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HorizontalBar} from 'react-chartjs-2';

class RentChart extends Component {
    constructor(props){
        super(props);
        this.state = {            
                chartData: {}
            
        }

        this.handleTotal = this.handleTotal.bind(this);
    }

    handleTotal(){
        let data = this.props.properties.property[0];
        let total = Number(data.monthly_dues) + Number(data.monthly_insurance) + Number(data.monthly_mortgage) + Number(data.monthly_taxes) + Number(data.monthly_utilities);
       
        return total;
    }

    render(){       
       
        let dataToRender;
        if(this.props.properties.property.length > 0 && this.props.properties.property[0] !== undefined){
            let chartData = this.props.properties.property;
            dataToRender = (
                 
                <div className="single-prop-chart">
                   
                   <HorizontalBar
                      data={{labels: [
                        'Monthly Rental Income',
                        'Total Monthly Expenses'
                    ],
                    datasets: [
                        {                  
                           
                            data: [
                              this.props.properties.property[0].rent,
                              this.handleTotal()
                              
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
                              display: false,
                              position: 'bottom'
                          },
                          title:{
                              display: true,
                              text: 'Income vs. Expenses',
                              fontSize: 25
                          },
                          maintainAspectRatio: true,
                       
                          }}/>
</div>
   
              
               )   
        
        }

        return(
            <div>
    {dataToRender}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        properties: state.propertiesReducer
    };
}

export default connect(mapStateToProps)(RentChart);