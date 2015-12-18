"use strict";

//Requires log in

import React from 'react';
import { connect } from 'react-redux';
import VideoList from  '../videolist'
var data = require('../../data/videos.json'); 
import actions from '../../actions';
import styles from '../../CSS-modules/dashboard.css';
import { updatePath } from 'redux-simple-router';
var C = require("../../constants");

export class Dashboard extends React.Component{	

  componentDidMount() { 
  	if(this.props.auth.currently != C.LOGGED_IN) {
    	this.props.redirectToStart()
  	}
  }
  render(){ 	
 	const {logoutUser, redirectToStart, auth} = this.props;

  	switch(auth.currently){
			case C.LOGGED_IN: return (
				<div className={styles.dashboardWrapper}>
					<div id={styles.videoboardContainer} > 
						<div className={styles.dashboardHeader}>
							<h2>Dashboard</h2>
							<div className={styles.authStatus}>
								<span>Logged in as {auth.username}.</span>

							</div>
						</div>		    			
			    		<hr />
			    		
			    		<VideoList data= {data} />
	    			</div>
	    		</div>
			);
			
			default: return (
			<h2>Not authorized</h2>
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
    redirectToStart: function() {dispatch(updatePath('/'))} 
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard); 


