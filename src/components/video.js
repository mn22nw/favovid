import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import styles from '../css-modules/video.css'
import actions from '../actions';

import Draggable from 'react-draggable'; // The default

var C = require("../constants");


export class Video extends Component {
  constructor() {
  super();
  this._handleClick = this._handleClick.bind(this);
 }

 handleDrag(e, ui) {
      var {left, top} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          left: left + ui.deltaX,
          top: top + ui.deltaY,
        }
      });
    }

    onStart() {
      console.log('it starts')
    }


    onStop() {
      //this.setState({activeDrags: --this.state.activeDrags});
    }

  render() {
    var drags = {onStart: this.onStart, onStop: this.onStop};

    var p = this.props;
    const opts = {
      height: 315,
      width: 560,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        theme:'light',
        color:'white',
        showinfo: 0,
        frameborder:0 
      }
    }
    console.log(p.state , ' <---- STATE');
    if (p.state === C.PLAY_VIDEO) {;
      return (
         <Draggable bounds="parent" handle="strong" {...drags}>
            <div className={styles.box}>
              <div onClick={this._handleClick} className={styles.videoDiv}>
                <a href ="#" className={styles.title}>{this.props.title}</a>
                <strong className={styles.dragButton}>X</strong>
                <div className={styles.videoWrapper}>
                   <YouTube
                      videoId={this.props.id}
                      opts={opts} />
                 </div>
                </div>
            </div>
          </Draggable>  

        );
    }
    else {
      return (       
         <Draggable bounds="parent" handle="strong" {...drags}>
            <div className={styles.box}>
              <div onClick={this._handleClick} className={styles.videoDiv}>
                <a href ="#" className={styles.title}>{this.props.title}</a>
                <strong className={styles.dragButton}>X</strong>
                <div className={styles.imgContainer} onClick={p.play}>
                  <a href="#" className={styles.playbutton}></a>
                  <img src={"http://img.youtube.com/vi/"+ this.props.id +"/mqdefault.jpg"} data-pin-no-hover="true" alt="thumbnail" />
                </div>
              </div>
            </div>
          </Draggable>     
      );
    }
  }

  loadVideo() {
    console.log('loading videooo' )

  }
  _handleClick() {

      //put drag in a function like this! 
      console.log('I was clicked', this.props.id)
 }
}

/*
<div onClick={this._handleClick} className={styles.videoDiv}>
        <a href ="#" className={styles.title}>{this.props.title}</a>
         <a href ="#" className={styles.dragButton}>X</a>
          
          <div className={styles.imgContainer} onClick={p.play}>
            <a href="#" className={styles.playbutton}></a>
            <img src={"http://img.youtube.com/vi/"+ this.props.id +"/mqdefault.jpg"} data-pin-no-hover="true" alt="thumbnail" />
          </div>
       </div>

*/



/*
//when the state is set to play for that video, it will show the iframe instead? 

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

