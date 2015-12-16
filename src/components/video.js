import React, { Component } from 'react';
import YouTube from 'react-youtube';
var ptypes = React.PropTypes;

export class Video extends Component {
  constructor() {
  super();
  this._handleClick = this._handleClick.bind(this);
 }
  render() {
  	propTypes: {
		// redux action hookups, set up below
		reset: ptypes.func.isRequired
	}

  const opts = {
    height: 315,
    width: 560
  }
    return (
     <div onClick={this._handleClick} >
     <YouTube
      videoId={this.props.id}
      opts={opts}
     />
     </div>
    );
  }
  _handleClick() {
  console.log('I was clicked', this.props.id)
 }
}