import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from '../CSS-modules/navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
};

