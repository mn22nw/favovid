"use strict";

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//import constants from '../constants';
import actions from '../actions';
import { updatePath } from 'redux-simple-router'

import C from "../constants";

//Styles and images
import styles from '../css-modules/authpanel.css';

class Authpanel extends Component {
    handleLoginWithPassword(e){
        e.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        this.props.attemptLoginPassword(email, password);
    }
    render() {

        const p = this.props;
        const auth = p.auth;

        if (auth.currently == C.LOGGED_IN) {
            p.redirectToDashBoard()
        }

        return (
            <section>
                <div className={styles.authpanel}>
                    {(() => {
                        switch (auth.currently) {
                            case C.AWAITING_AUTH_RESPONSE:
                                return <h1>Authenticating...</h1>;

                            default:
                                return <div><a href='#' onClick={p.attemptLogin}>
                                    Login with <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                    alt='google-logo'/>
                                </a>
                                    <form className="newUserform" onSubmit={this.handleLoginWithPassword.bind(this)}>
                                        <input ref='email' type='text' placeholder='Email'/>
                                        <input ref='password' type='password' placeholder='Password'/>

                                        <button type="submit">Login</button>
                                    </form>
                                </div>;
                        }
                    })()}
                </div>
            </section>
        );
    }
}

const mapStateToProps = function (appState) {
    // This component will have access to `appState.auth` through `this.props.auth`
    return {auth: appState.auth};
};

const mapDispatchToProps = function (dispatch) {
    return {
        attemptLogin: function () {
            dispatch(actions.attemptLogin());
        },
        logoutUser: function () {
            dispatch(actions.logoutUser());
        },
        redirectToDashBoard: function () {
            dispatch(updatePath('/dashboard'))
        },
        attemptLoginPassword: function(email, password){
            dispatch(actions.loginUserWithEmailAndPassword(email, password))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Authpanel);

