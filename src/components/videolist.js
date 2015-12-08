import React, { Component } from 'react';
import {Video} from  './Video.js'
var _ = require("lodash");

export class VideoList extends Component {
  constructor() {
  super();
  this._handleClick = this._handleClick.bind(this);
 }

  render() {
  	var p = this.props, 
  		videos = _.map(p.data.videos ,function(vid){ // loop through all videos
			return <Video key={vid.id} id={vid.id}  />;
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