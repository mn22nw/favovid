"use strict";

import React, {Component} from 'react';
import styles from '../../CSS-modules/pages/signUp.css';
import Registerpanel from '../registerpanel';
import Feedbackpanel from '../feedbackpanel';

export default class SignUp extends Component{
  render(){
  	const p = this.props;
    return (
    	<div className={styles.signUpWrapper}>
	    	<div className={styles.signUp}>
	    		 <Feedbackpanel />
	    		 <Registerpanel />        			    		
	    	</div>
    	</div>
    );
  }
};

