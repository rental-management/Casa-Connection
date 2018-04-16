import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar, Line, Pie, Doughnut, Polar } from "react-chartjs-2";
import { getProperties } from "./../../ducks/propertiesReducer";

class TotalExpensesChart extends Component {
 constructor() {
   super();
   this.state = {
     chartData: {}
   };
 }

  render() {
    let chartData = this.props.properties.properties;
    let newChartData;
    let assessedVal = [];
    let downPayment = [];
    let monthlyDues = [];
    let monthlyInsurance = [];
    let monthlyMort = [];
    let monthlyTax = [];
    let monthlyUtility = [];

    
    console.log("all properties data: ",chartData);
    if(chartData.length > 0 && chartData !== undefined) {
      // console.log(chartData, "CHART DATA!!!!")
      newChartData = chartData.map((curr, i) => {
        // console.log(curr, "curr here")
      assessedVal.push(parseInt(curr.assessed_value))
      downPayment.push(parseInt(curr.down_payment))
      monthlyDues.push(parseInt(curr.monthly_dues))
      monthlyInsurance.push(parseInt(curr.monthly_insurance))
      monthlyMort.push(parseInt(curr.monthly_mortgage))
      monthlyTax.push(parseInt(curr.monthly_taxes))
      monthlyUtility.push(parseInt(curr.monthly_utilities))
        
      })
      console.log("all assessed values: ",assessedVal);
      function getTotal(total, sum){
        return total+sum
      }
  assessedVal = assessedVal.reduce(getTotal);
  downPayment = downPayment.reduce(getTotal);
  monthlyDues = monthlyDues.reduce(getTotal);
  monthlyInsurance = monthlyInsurance.reduce(getTotal);
  monthlyMort = monthlyMort.reduce(getTotal);
  monthlyTax = monthlyTax.reduce(getTotal);
  monthlyUtility = monthlyUtility.reduce(getTotal);
    
          console.log("Assessed: ", assessedVal)
    
     


      newChartData = (
        <div className="single-prop-chart">
        <div>
            <Doughnut
              data={{
                labels: [
                  "Down Payment",
                  "Monthly Dues",
                  "Monthly Insurance",
                  "Assessed Value",
                  "Monthly Mortgage",
                  "Monthly Taxes",
                  "Monthly Utilities"
                ],
                datasets: [
                  {
                  

                    data: [
                      downPayment,
                      monthlyDues,
                      monthlyInsurance,
                      assessedVal,
                      monthlyMort,
                      monthlyTax,
                      monthlyUtility
                    ],
                  
                    backgroundColor: [
                      "#42BAB6", "#4BA6B6","#5C92AE",
                      "#00d8d6","#6C7D9F", "#76698B","#785673"
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#000'
                  }
                ],
              }}
              options={{
                legend: {
                  display: true,
                  position: 'left'
              },
              title:{
                display: true,
                text: "EXPENSE OVERVIEW",
                fontSize: 25,
                fontColor: ' #3799d6',
                fontFamily: 'Roboto'
              },
              maintainAspectRatio: true
              }}
            />
            </div>
            </div>
      );
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
};

export default connect(mapStateToProps, { getProperties })(TotalExpensesChart);
