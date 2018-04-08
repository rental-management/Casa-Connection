import React, { Component } from 'react';
import axios from 'axios';
import ExpenseChart from './../Charts/ExpenseChart';

class Financial extends Component {
    constructor(props){
        super(props);

    }

  render() {
      return(
          <div>
              FINANCIAL
              <ExpenseChart />
              </div>
      )
  }
}

export default Financial;