import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import styles from '../css-modules/video.css'
import actions from '../actions';

var ptypes = React.PropTypes;

export class Video extends Component {
  constructor() {
  super();
  this._handleClick = this._handleClick.bind(this);
 }

  render() {
 
    const opts = {
      height: 315,
      width: 560
    }

      return (
       <div onClick={this._handleClick} className={styles.videoDiv}>
        <a href ="#" className={styles.title}>The title here...</a>
         <a href ="#" className={styles.dragButton}>X</a>
          <a href ="#" className={styles.title}>{this.props.title}</a>
          <div className={styles.imgContainer} onClick={this.loadVideo.bind(this,this.props.id)}>
            <a href="#" className={styles.playbutton}></a>
            <img src={"http://img.youtube.com/vi/"+ this.props.id +"/mqdefault.jpg"} data-pin-no-hover="true" alt="thumbnail" />
          </div>
       </div>
      );
  }

  loadVideo() {
    console.log('loading videooo' )

  }
  _handleClick() {

      //change redux-state? no? 
      console.log('I was clicked', this.props.id)
 }
}


/*
// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
  // This component will have access to `appState.auth` through `this.props.auth`
  return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
  return {
    loadVideo: function(vid){ dispatch(actions.loadVideo(vid)); }
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Video);  */





/*
       <YouTube
        videoId={this.props.id}
        opts={opts}
       />

*/