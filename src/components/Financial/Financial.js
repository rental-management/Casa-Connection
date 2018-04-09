import React, { Component } from 'react';
import axios from 'axios';
import ExpenseChart from './../Charts/ExpenseChart';

class Financial extends Component {
    constructor(){
        super();

    }

  render() {
      return(
          <div>
              FINANCIAL
            <div>
              {/* <ExpenseChart /> */}
         </div>
              </div>
      )
  }
}

export default Financial;