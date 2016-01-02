"use strict";

//Only visible for authenticated users

import React from 'react';
import { connect } from 'react-redux';
import VideoList from  '../videolist'
import actions from '../../actions';
import styles from '../../CSS-modules/dashboard.css';
import { updatePath } from 'redux-simple-router';
var C = require("../../constants");

export class Dashboard extends React.Component{	

  render(){ 	
 	const {logoutUser, auth} = this.props;

  	return (
				<div className={styles.dashboardWrapper}>
					<div id={styles.videoboardContainer} > 
						<div className={styles.dashboardHeader}>
							<h2>Dashboard</h2>
							<div className={styles.authStatus}>
								<span>Logged in as {auth.username}.</span>

							</div>
						</div>		    			
			    		<hr />
			    		
			    		<VideoList  />
	    			</div>
	    		</div>
			);

		}
};

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	return {auth:appState.auth};
};

module.exports = connect(mapStateToProps)(Dashboard); 


