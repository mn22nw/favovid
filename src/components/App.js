"use strict";
/*
This is the main container/wrapper for the app, it renders the header, navigation, footer etc.
*/

import React, { Component } from 'react';
import Navigation     from './navigation';
import Footer         from './footer';
import styles         from '../CSS-modules/App.css'
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { updatePath } = require('redux-simple-router');
import logoUrl from '../images/logo.png';

function App({ updatePath, children }) {
  return (
    <div>
      <header>   
        <div className={styles.navWrapper}> 
          <Link to='/' className={styles.logo}><img src={logoUrl} alt='logo'/></Link>  
          <Navigation />
        </div>
      </header>
      <div className={styles.content}>
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

module.exports = connect(
  null,
  { updatePath }
)(App);