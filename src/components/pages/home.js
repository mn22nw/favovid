"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
const { Link } = require('react-router');
var C = require("../../constants");
import styles from '../../css-modules/home.css';
import { updatePath } from 'redux-simple-router'

export class Home extends Component {
  
  componentDidMount() { 
    if(this.props.auth.currently == C.LOGGED_IN) {
      this.props.redirectToDashBoard();
    }
  }

  render() {
  const {increase, decrease, number} = this.props; 

  return (
    <div className={styles.homeWrapper}>
    <h2 className={styles.startMsg}> Store and sort your favourite Youtube-videos!</h2>
    <div className={styles.content} >
      <h2>Home</h2>
    
        
        <p>An instruction video will be here....and also sign up options to the right. But in the meantime, here is a counter.</p>
      
         Some state changes:
        {number}
        <br />
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

      </div>
    </div>
  );
    }
};




// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
  return {number:appState.count.number, auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
  return {
    increase: function(){ dispatch(actions.increase(1)); } ,
    decrease: function(){ dispatch(actions.decrease(1)); },
    redirectToDashBoard: function() {dispatch(updatePath('/dashboard'))} 
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Home); 
