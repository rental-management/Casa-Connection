// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
// import { getProperties } from "./../../ducks/propertiesReducer";

// class TotalExpensesChart extends Component {
//  constructor() {
//    super();
//    this.state = {
//      chartData: {}
//    };
//  }

//  render() {
//    let chartData = this.props.properties;
//    let newChartData;
//    let totalData;
// //     if (chartData.length !== 0 && chartData !== undefined) {
// //       totalData = chartData.map( (curr, index) => {
// //         console.log(curr);
// //         return(<div key = {index}>{curr.assessed_value}</div>);


// //       })





// //       newChartData = (
// //         <div className="chart">
// //             <Pie
// //               data={{
// //                 labels: [
// //                   "Assessed Value",
// //                   "Down Payment",
// //                   "Monthly Dues",
// //                   "Monthly Insurance",
// //                   "Monthly Mortgage",
// //                   "Monthly Taxes",
// //                   "Monthly Utilities"
// //                 ],
// //                 datasets: [
// //                   {
// //                     label: "Property Expenses",

// //                     data: [
// //                       this.props.properties[10].assessed_value,
// //                       this.props.properties[10].down_payment,
// //                       this.props.properties[10].monthly_dues,
// //                       this.props.properties[10].monthly_insurance,
// //                       this.props.properties[10].monthly_mortgage,
// //                       this.props.properties[10].monthly_taxes,
// //                       this.props.properties[10].monthly_utilities
// //                     ],
// //                     backgroundColor: [
// //                       "rgba(255, 99, 132, 0.6)",
// //                       "rgba(54, 162, 235, 0.6)",
// //                       "rgba(255, 206, 86, 0.6)",
// //                       "rgba(75, 192, 192, 0.6)",
// //                       "rgba(153, 102, 255, 0.6)",
// //                       "rgba(255, 159, 64, 0.6)",
// //                       "rgba(255, 99, 132, 0.6)"
// //                     ]
// //                   }
// //                 ]
// //               }}
// //               options={{
// //                 maintainAspectRatio: true
// //               }}
// //             />
// //         </div>
// //       );
     
// //     }
// //     // return <div>{chartData.length > 0 && newChartData}</div>;
// //     return({totalData}) 
// //   }
// // }

// const mapStateToProps = state => {
//  return {
//    properties: state.propertiesReducer
//  };
// };

// export default connect(mapStateToProps, { getProperties })(TotalExpensesChart);
