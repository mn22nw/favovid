"use strict";

import React, {Component} from 'react';
import { connect } from 'react-redux';
const { Link } = require('react-router');
import styles from '../css-modules/authpanel.css';
//import constants from '../constants';
import actions from '../actions';

var C = require("../constants");

class Authpanel extends Component{
  render(){

      	var p = this.props, auth = p.auth;
		
		switch(auth.currently){
			case C.LOGGED_IN: return (
				<div className="styles.authpanel">
					<span>Logged in as {auth.username}.</span>
					{' '}<button onClick={p.logoutUser}>Log out</button>
				</div>
			);
			case C.AWAITING_AUTH_RESPONSE: return (
				<div className="styles.authpanel">
					<button disabled> authenticating...</button>
				</div>
			);
			default: return (
				<div className="styles.authpanel">
					<button onClick={p.attemptLogin}>Log in</button>
				</div>
			);
		}
  }
};

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		attemptLogin: function(){ dispatch(actions.attemptLogin()); },
		logoutUser: function(){ dispatch(actions.logoutUser()); }
	}
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Authpanel); 


