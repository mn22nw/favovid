"use strict";

import React, {Component} from 'react';
import styles from '../CSS-modules/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <p>This will be the footer.</p>
            </div>
        )
    }
};