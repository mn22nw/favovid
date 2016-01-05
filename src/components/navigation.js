import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import styles from '../CSS-modules/navigation.css';
import actions from '../actions';
var C = require("../constants");

export class Navigation extends Component {
  render() {
    const {logoutUser, auth} = this.props;

    return (
      <div className={styles.navigation}>
        
          {(() => {
          switch(auth.currently){
            case C.LOGGED_IN: 
              return <nav>
              <div onClick={logoutUser} className={styles.logOutWrapper}>
               <Link to='/' activeClassName={styles.current}>Log out</Link> 
               </div>
               </nav>
                
            default: 
              return <nav> 
                <Link to='/about' activeClassName={styles.current} >About</Link>
                <Link to='/signUp' activeClassName={styles.current}>Sign up</Link> 
                <Link to='/login' activeClassName={styles.current}>Log In</Link> 
                </nav>
              }
            })()}

      </div>
    );
  }
};

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
  // This component will have access to `appState.auth` through `this.props.auth`
  return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
  return {
    logoutUser: function(){ dispatch(actions.logoutUser()); }
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Navigation);  
