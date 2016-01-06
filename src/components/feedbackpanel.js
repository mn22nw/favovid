import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import styles from '../css-modules/feedbackpanel.css'
var	C = require("../constants")


export class Feedbackpanel extends Component {


  render() {
    var p = this.props, messageStyle, rows = p.feedback.map(function(f,n){
    	if (f.error){
			messageStyle = styles.error
		}	
		else {
			messageStyle = styles.feedback
		}

		return (<div key={n} className={messageStyle}>
				<span>{f.msg}</span>
				<button onClick={p.dismissFeedback.bind(this,n)}>X</button>
			</div>);
		});
		return (<div className={styles.feedbacklist}>
			{rows}
		</div>)
    }
  }



// now we connect the component to the Redux store:

var mapStateToProps = function(appState){
	// This component will have access to `appState.feedback` through `this.props.feedback`
	return {feedback:appState.feedback};
};

var mapDispatchToProps = function(dispatch){
	return {
		dismissFeedback: function(n){ dispatch(actions.dismissFeedback(n)); }
	}
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Feedbackpanel);
