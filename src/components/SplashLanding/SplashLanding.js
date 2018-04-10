import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Login from '../Login/Login';

class SplashLanding extends Component {
    render() {
        return (
            <div>
                <div className="splash">
                    <div className="first-container">
                        <div>
                            <div className="splash-header">
                                <img className="logo" src={require('../../assets/favicon.png')} />
                                <h1> CASA CONNECTION </h1>
                            </div>
                            <Login />
                        </div>
                        <div>
                            <h2> Simplify Your Renting Routine </h2>
                            <p> The ultimate property management solution to manage your properties with ease and build a better business.  </p>
                            <button className="started-btn"> GET STARTED </button>
                        </div>
                    </div>
                </div>
                <div className="second-container">
                        <div> 
                            <FontAwesome 
                                className="chart"
                                name="fas fa-home"
                                size='7x'
                                style={{ color: '#5baecc' }}
                                />
                            <h1> Organize Property Information </h1>
                            {/* <p> aslkdjfas </p>  */}
                        </div>
                        <div> 
                        <FontAwesome 
                                className="chart"
                                name="fas fa-chart-bar"
                                size='7x'
                                style={{ color: '#5baecc'}}
                                />
                            <h1> Visualize Financial Data </h1> 
                            {/* <p> lasdf </p> */}
                        </div>
                        <div> 
                        <FontAwesome 
                                className="chart"
                                name="fas fa-wrench"
                                size='7x'
                                style={{ color: '#5baecc' }}
                                />
                            <h1> Streamline Service Requests </h1> 
                            {/* <p> lahsdf </p> */}
                        </div>
                </div>
                <div className="third-container">
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
}
export default SplashLanding;


