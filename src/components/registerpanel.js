"use strict";

import React, {Component} from 'react';
import { connect } from 'react-redux';
const { Link } = require('react-router');
import actions from '../actions';
import { updatePath } from 'redux-simple-router'
var C = require("../constants");
import styles from '../css-modules/registerpanel.css';

class Registerpanel extends Component {
  createUserWithEmail(e) { 	
	  if (!this.props.users.submitting){
	  			e.preventDefault();
				this.props.signUpUserWithEmail(this.refs.username.value, this.refs.email.value, this.refs.password.value);
				this.refs.username.value = '';
				this.refs.email.value  = '';
				this.refs.password.value = '';
			}		
  	}
  render(){

      	var p = this.props, users = p.users;
      	return (
		  <section>
			  	<div className={styles.registerpanel}>
			  		<h2>Sign up with</h2>
			  		<a href='#' onClick={p.signUpUserWithGoogle}>
			          	<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"  alt='google-logo' />
			         </a>

			  		<p>-OR-</p>

			         <p>Sign up with email</p>		  		
			  		<form className="newUserform" onSubmit={this.createUserWithEmail.bind(this)}>
			  			<input ref='username' type='text' placeholder='Name' />
						<input ref='email' type='text' placeholder='email' />
				  		<input ref='password' type='password' placeholder='password' />

						<button type="submit" disabled={p.users.submittingnew}>{p.users.submittingnew ? "Submitting..." : "Submit"}</button>
					</form>    		
			    </div>
		  </section>
		);
  }
   
};

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	// This component will have access to `appState.users` through `this.props.users`
	return {users:appState.users};
};

var mapDispatchToProps = function(dispatch){
	return {
		signUpUserWithEmail: function(username, email, password ){ dispatch(actions.signUpUserWithEmail(username, email, password)); },
		signUpUserWithGoogle: function(){ dispatch(actions.signUpUserWithGoogle()); },
		redirectToDashBoard: function() {dispatch(updatePath('/dashboard'))}
	}
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Registerpanel); 

