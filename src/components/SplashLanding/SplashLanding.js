import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Login from '../Login/Login';
import GetStarted from '../GetStarted/GetStarted';

class SplashLanding extends Component {
    render() {
        return (
            <div>
                <div className="splash">
                    <div className="first-container">
                        <div>
                            <div className="splash-header">
                                <img className="logo" src={require('../../assets/favicon.png')} />
                                <h1> Casa Connection </h1>
                            </div>
                            <Login />
                        </div>
                        <div>
                            <h2> Simplify Your Renting Routine </h2>
                            <p> The ultimate property management solution to manage your properties with ease and build a better business.  </p>
                            <GetStarted />
                        </div>
                    </div>
                </div>
                <div className="second-container">
                        <div> 
                            <FontAwesome 
                                className="chart"
                                name="fas fa-home"
                                size='6x'
                                style={{ color: '#ff3776', opacity: '0.8' }}
                                />
                                <hr />
                            <h1> Organize Property Information </h1>
                        
                        </div>
                        <div> 
                        <FontAwesome 
                                className="chart"
                                name="fas fa-chart-bar"
                                size='6x'
                                style={{ color: '#ff3776', opacity: '0.8'}}
                                />
                                <hr />
                            <h1> Visualize Financial Data </h1> 
                           
                        </div>
                        <div> 
                        <FontAwesome 
                                className="chart"
                                name="fas fa-wrench"
                                size='6x'
                                style={{ color: '#ff3776', opacity: '0.8' }}
                                />
                                <hr />
                            <h1> Streamline Service Requests </h1> 
                         
                        </div>
                </div>
                <div className="third-container">
                <h2>For the DIY Property Manager</h2>
                <p>We are the premier rental management application for landlords with smaller portfolios. We understand what our users need because we are the users too! Join us and never have to worry about losing important contractor info or organizing your list of pending work requests. We take care of all of that for you. Let us make your life easier. </p>
                <div className = "testimonial">
                <img src = {require('../../assets/customer.png')} alt = 'customer' id = 'cust-img'/>
                <blockquote className = 'quote'><i class="fa fa-quote-left" aria-hidden="true"></i> I use Casa Connection for all my management needs. I've never been so happy with a software product in my entire life. It's unbelievable. Who knew life could be this easy? Two thumbs up from me. Thank you Casa Connection!! <i class="fa fa-quote-right" aria-hidden="true"></i></blockquote><span id = 'author'>- Steven from TX</span>
                </div>
                </div>
                <div className="footer">
                    <div> Copyright @ 2018 Casa Connection, LLC </div>
                </div>
            </div>
        )
    }
}
export default SplashLanding;


