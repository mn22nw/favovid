"use strict";
/*
 This is the main container/wrapper for the app, it renders the header, navigation, footer etc.
 */

import React, { Component } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import styles from '../CSS-modules/App.css'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { updatePath } from 'redux-simple-router';
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
}

export default connect(
    null,
    {updatePath}
)(App);