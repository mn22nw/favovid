import React, { Component } from 'react';
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
    return (
     <div onClick={this._handleClick} >
     
     <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+ this.props.id}  frameborder="0" allowfullscreen></iframe>
     </div>
    );
  }
  _handleClick() {
  console.log('I was clicked', this.props.id)
 }
}