import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from '../CSS-modules/navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <nav>
            <Link to='/about' activeClassName={styles.current} >About</Link>
            <Link to='/login' activeClassName={styles.current}>Log In</Link>
            <Link to='/dashboard' activeClassName={styles.current}>Dashboard</Link>
        </nav>
      </div>
    );
  }
};

