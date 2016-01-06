"use strict";

//Only visible for authenticated users

import React from 'react';
import { connect } from 'react-redux';
import VideoList from  '../videolist'
import actions from '../../actions';
import styles from '../../CSS-modules/pages/dashboard.css';
import { updatePath } from 'redux-simple-router';
import Feedbackpanel from '../feedbackpanel';
var C = require("../../constants");

export class Dashboard extends React.Component{	

  render(){ 	
 	const {auth} = this.props;

  	return (
				<div id={styles.dashboardWrapper} > 
					<div className={styles.dashboardHeader}>
						<div className={styles.authStatus}>
								<span>Logged in as {auth.username}.</span>
						</div>
						<div className={styles.addVideo}>
							<input ref='youtubeUrl' type='text' className='youtube-url' placeholder='paste youtube-url here' />
							<a href='#' onClick={this.addNewVideo.bind(this)}> Add Video </a>
						</div>
						<div className={styles.feedbackWrapper}>
							<Feedbackpanel />
						</div>
					</div>		    			
		    		<hr />
		    		
		    		<VideoList  />
    			</div>
			);

		}

	addNewVideo() {
		this.props.addNewVideo(this.refs.youtubeUrl.value)
	}
};

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
  return {
    addNewVideo: function(youtubeid){ dispatch(actions.addNewVideo(youtubeid)); }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard); 


