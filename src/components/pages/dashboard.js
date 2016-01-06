"use strict";

//Only visible for authenticated users

import React from 'react';
import { connect } from 'react-redux';
import VideoList from  '../videolist'
import actions from '../../actions';
import styles from '../../CSS-modules/pages/dashboard.css';
import { updatePath } from 'redux-simple-router';
var C = require("../../constants");

export class Dashboard extends React.Component{	
  constructor() {
  super();
 }
  render(){ 	
 	const {logoutUser, auth} = this.props;

  	return (
				<div id={styles.dashboardWrapper} > 
					<div className={styles.dashboardHeader}>
						<div className={styles.authStatus}>
								<span>Logged in as {auth.username}.</span>
						</div>
						<div className={styles.addVideo}>
							<input type='text' className='youtube-url' placeholder='paste youtube-url here' />
							<a href='#' > Add Video </a>
						</div>
					</div>		    			
		    		<hr />
		    		
		    		<VideoList  />
    			</div>
			);

		}
};

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
  return {
    addVideo: function(youtubeid){ dispatch(actions.loadVideo(youtubeid)); }
  }
};

module.exports = connect(mapStateToProps)(Dashboard); 


