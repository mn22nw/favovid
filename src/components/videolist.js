import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Video} from  './Video.js'
var _ = require("lodash");
import actions from '../actions';
var C = require("../constants");



export class VideoList extends Component {
  constructor() {
  super();
  this._handleClick = this._handleClick.bind(this);
 }

  render() {      
  	var p = this.props, 
  		videos = _.map(p.videos.data,function(video,vid){ // loop through all videos
      console.log(vid , ' VID IS THE UNIQUE ID FOR EACH VIDEO....ofc....')
      var youtubeid = video.uid;   
      var videostate = p.videos.states[youtubeid];
      
			return <Video 
              key={youtubeid} 
              id={youtubeid} 
              title={video.title} 
              state= {videostate} 
              play={p.loadVideo.bind(this,youtubeid)} />;
		},this);	


    return (
     <div className='videos' >
     	 {videos}
     </div>
    );
  }
  _handleClick() {
  console.log('I was clicked')
 }
}


var mapStateToProps = function(appState){
  return {
    videos: appState.videos,
    auth: appState.auth
  };
};

var mapDispatchToProps = function(dispatch){
  return {
    loadVideo: function(youtubeid){ dispatch(actions.loadVideo(youtubeid)); }
  }
}; 

module.exports = connect(mapStateToProps, mapDispatchToProps )(VideoList);