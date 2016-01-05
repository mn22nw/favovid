"use strict";

import React, {Component} from 'react';
import styles from '../../CSS-modules/pages/signUp.css';
import Registerpanel from '../registerpanel';

export default class SignUp extends Component{
  render(){
  	var p = this.props;
    return (
    	<div className={styles.signUpWrapper}>
	    	<div className={styles.signUp}>
	    		 <Registerpanel />        			    		
	    	</div>
    	</div>
    );
  }
};

