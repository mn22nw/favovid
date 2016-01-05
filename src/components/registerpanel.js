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
  	
	  	e.preventDefault();
		
	  	console.log('PROPS ', this.props)

	  if (!this.props.users.submitting){
	  			
				var email = this.refs.email.value , 
				password = this.refs.password.value;
				console.log(email, password);
				//this.props.signUpUserWithEmail(email, password);
				email = '';
				password = '';
			}		
  	}
  render(){

      	var p = this.props, users = p.users;
      	return (
		  <section>
		  	<div className={styles.registerpanel}>
		  		<p>Sign up with email</p>		  		

		  		<form className="newUserform" onSubmit={this.createUserWithEmail.bind}>
					<input ref='email' type='text' placeholder='email' />
			  		<input ref='password' type='text' placeholder='password' />

					<button type="submit" disabled={p.users.submittingnew}>{p.users.submittingnew ? "Submitting..." : "Submit"}</button>
				</form> 

		  		<p>-OR-</p>
				<a href='#' onClick={p.signUpUserWithGoogle}>
		          	<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"  alt='google-logo' />
		         </a>
		           		
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
		signUpUserWithEmail: function(){ dispatch(actions.signUpUserWithEmail()); },
		signUpUserWithGoogle: function(){ dispatch(actions.signUpUserWithGoogle()); },
		redirectToDashBoard: function() {dispatch(updatePath('/dashboard'))}
	}
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Registerpanel); 

