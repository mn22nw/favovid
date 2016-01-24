"use strict";

import React, {Component} from 'react';
import styles from '../../css-modules/pages/about.css'

export default class About extends Component {
    render() {
        return <div className={styles.about}>
            <div className={styles.aboutWrapper}>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, aliquip laoreet perpetua te pri, at eam ponderum recusabo.
                    Mei ex dico officiis consequat. Noster omittam ut vel, sanctus maluisset quaerendum vis in, an has
                    iuvaret denique perfecto.
                    Ludus cetero probatus usu ea, aperiam dissentiunt mel et, pro suas ubique ea. Nisl perfecto
                    disputando eum et,
                    animal ponderum in eum. Meliore epicuri lobortis eum ad, ut his oporteat petentium. </p>
            </div>
        </div>;
    }
};