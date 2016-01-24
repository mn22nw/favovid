import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import styles from '../css-modules/feedbackpanel.css'
import C from "../constants";

export class Feedbackpanel extends Component {
    render() {
        const p = this.props;
        let messageStyle;
        const rows = p.feedback.map(function (f, n) {
            if (f.error) {
                messageStyle = styles.error
            }
            else {
                messageStyle = styles.feedback
            }

            return (
                <div key={n} className={messageStyle}>
                    <span>{f.msg}</span>
                    <button onClick={p.dismissFeedback.bind(this,n)}>X</button>
                </div>);
        });
        return (
            <div className={styles.feedbacklist}>
                {rows}
            </div>)
    }
}

const mapStateToProps = function (appState) {
    // This component will have access to `appState.feedback` through `this.props.feedback`
    return {feedback: appState.feedback};
};

const mapDispatchToProps = function (dispatch) {
    return {
        dismissFeedback: function (n) {
            dispatch(actions.dismissFeedback(n));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedbackpanel);
