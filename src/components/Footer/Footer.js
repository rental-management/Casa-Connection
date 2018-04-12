import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="real_footer">
              <div className="real_footer-container">
                <h3 className="real_footer-text">Copyright @ 2018 Casa Connection, LLC | <Link style={{ color: 'white' }} to="/contact"> Contact </Link> </h3>
              </div>
            </div>
        )
    }
}

export default Footer;