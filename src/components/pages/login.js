"use strict";

import React, {Component} from 'react';
import styles from '../../CSS-modules/login.css';
import {Authpanel} from '../authpanel';

export default class Login extends Component{
  render(){
    return (
    	<div className={styles.login}>
    		
    		<h2>Login here....</h2>
    		<Authpanel />
    	</div>
    );
  }
};

