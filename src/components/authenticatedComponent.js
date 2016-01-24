import React, { Component } from 'react';
import {connect} from 'react-redux';
import C from "../constants";
import { updatePath } from 'redux-simple-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (this.props.auth.currently != C.LOGGED_IN) {
                this.props.redirectToStart();
            }
        }

        render() {
            const {auth} = this.props;

            return (
                <div>
                    {auth.currently == C.LOGGED_IN
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = function (appState) {
        // This component will have access to `appState.auth` through `this.props.auth`
        return {auth: appState.auth};
    };

    const mapDispatchToProps = function (dispatch) {
        return {
            redirectToStart: function () {
                dispatch(updatePath('/'))
            }
        }
    };

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

}

