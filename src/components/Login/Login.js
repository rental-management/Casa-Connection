import React from 'react';
import { connect } from 'react-redux';

const Login = props => {
    return (
        <div>
            {!props.user.user_name ? (
                <a href={process.env.REACT_APP_LOGIN}>
                <button className="login-btn">LOGIN</button>
                </a>
            ) : (
                <a href={process.env.REACT_APP_LOGOUT}>
                <button className="login-btn">LOGOUT</button>
                </a>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    ...state.userReducer
});

export default connect(mapStateToProps)(Login);

