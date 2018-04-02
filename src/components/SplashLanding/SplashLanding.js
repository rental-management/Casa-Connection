import React, {Component} from 'react';

import Login from '../Login/Login';

class SplashLanding extends Component {
    render() {
        return(
            <div>
                <div className="first-container">
                    <div>
                        <h1> Casa Connection </h1> 
                        <Login />
                    </div> 
                    <div>
                        <h2> Rental Management Simplified </h2>
                        <button> Get started </button>
                    </div>
                </div>
                <div className="second-container">

                </div>
                <div className="third-container">

                </div>
            </div>
        )
    }
}
export default SplashLanding;

