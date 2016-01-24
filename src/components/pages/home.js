"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import styles from '../../css-modules/pages/home.css';
import { updatePath } from 'redux-simple-router'
import Registerpanel from '../registerpanel';
import { Link } from 'react-router';
import C from "../../constants";

export class Home extends Component {
    componentDidMount() {
        console.log('Auth currently = ', this.props.auth.currently)
        if (this.props.auth.currently == C.LOGGED_IN) {
            this.props.redirectToDashBoard();
        }
    }

    render() {
        const {increase, decrease, number, auth} = this.props;

        return (
            <div className={styles.homeWrapper}>
                <h2 className={styles.startMsg}> Store and sort your favourite Youtube-videos!</h2>
                <div className={styles.content}>
                    <div className={styles.homeInfo}>
                        <h2>Home</h2>
                        <p>An instruction video will in the future be here.... <br />But in the meantime, here is a
                            counter.</p>
                        Some state changes:
                        {number}
                        <br />
                        <button onClick={increase}>Increase</button>
                        <button onClick={decrease}>Decrease</button>
                    </div>
                    <div className={styles.signUp}>
                        <Registerpanel />
                    </div>
                </div>
            </div>
        );
    }
}

// now we connect the component to the Redux store:
const mapStateToProps = function (appState) {
    return {number: appState.count.number, auth: appState.auth};
};

const mapDispatchToProps = function (dispatch) {
    return {
        increase: function () {
            dispatch(actions.increase(1));
        },
        decrease: function () {
            dispatch(actions.decrease(1));
        },
        redirectToDashBoard: function () {
            dispatch(updatePath('/dashboard'))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
