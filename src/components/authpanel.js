"use strict";

import React, {Component} from 'react';
import { connect } from 'react-redux';
const { Link } = require('react-router');

//import constants from '../constants';
import actions from '../actions';
import { updatePath } from 'redux-simple-router'

var C = require("../constants");

//Styles and images
import styles from '../css-modules/authpanel.css';
//import googleUrl from '../images/google-logo.svg';

class Authpanel extends Component{
  render(){

      	var p = this.props, auth = p.auth;
      	
      	if (auth.currently == C.LOGGED_IN) {
	      		p.redirectToDashBoard()
	    }

		return (
		  <section>

		  	<div className={styles.authpanel}>
		      {(() => {
		        switch (auth.currently) {
		          case C.AWAITING_AUTH_RESPONSE: return <h1>Authenticating...</h1>

		          default: return <a href='#' onClick={p.attemptLogin}>
		          	Login with <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"  alt='google-logo' />
		          	</a>
		          		
		        }
		      })()}
		      </div>
		  </section>
		);
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
		logoutUser: function(){ dispatch(actions.logoutUser()); },
		redirectToDashBoard: function() {dispatch(updatePath('/dashboard'))}
	}
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Authpanel); 

