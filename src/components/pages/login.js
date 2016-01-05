"use strict";

import React, {Component} from 'react';
import styles from '../../CSS-modules/pages/login.css';
import Authpanel from '../authpanel';

export default class Login extends Component{
  render(){
    return (
    	<div className={styles.login}>
    		
    		<Authpanel />
    	</div>
    );
  }
};

