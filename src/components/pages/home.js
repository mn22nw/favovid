"use strict";

import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../actions/count';
const { Link } = require('react-router');
import styles from '../../css-modules/home.css';


function Home({ number, increase, decrease }) {
  return (
    <div className={styles.homeWrapper}>
    <h2 className={styles.startMsg}> Store and sort your favourite Youtube-videos!</h2>
    <div className={styles.content} >
      <h2>Home</h2>
       
        
        <p>An instruction video will be here....and also sign up options to the right. But in the meantime, here's a counter.</p>
      
         Some state changes:
        {number}
        <br />
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>

      </div>
    </div>
  );
};

module.exports = connect(
  state => ({ number: state.count.number }),
  { increase, decrease },

)(Home);

