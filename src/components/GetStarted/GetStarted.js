import React from 'react';
import { connect } from 'react-redux';
const {REACT_APP_LOGIN, REACT_APP_LOGOUT } = process.env;

const Login = props => {
    return (
        <div className="get-started">
                <a href={REACT_APP_LOGIN}>
                <button className = 'started-btn'>GET STARTED</button>
                </a>

        </div>
    );
};

const mapStateToProps = state => ({
    ...state.userReducer
});

export default connect(mapStateToProps)(Login);
