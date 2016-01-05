/*
This module contains action creators dealing with `appState.auth`
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	fireRef = new Firebase(C.FIREBASE);

import { updatePath } from 'redux-simple-router';

module.exports = {
	// called at app start
	startListeningToAuth: function(){
		return function(dispatch,getState){
			fireRef.onAuth(function(authData){
				if (authData){ 

					console.log(authData.uid, 'UUUUUUUID')
					
					dispatch({
						type: C.LOGIN_USER,
						uid: authData.uid,
						username: authData.google.displayName || authData.google.username
					});
				} else {
					if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
						dispatch({type:C.LOGOUT});
					}
				}
			});
		}
	},
	attemptLogin: function(){
		return function(dispatch,getState){
			dispatch({type:C.ATTEMPTING_LOGIN});
			fireRef.authWithOAuthPopup("google", function(error, authData) {
				if (error) {
					dispatch({type:C.DISPLAY_ERROR,error:"Login failed! "+error});
					dispatch({type:C.LOGOUT});
				} else {
					// no need to do anything here, startListeningToAuth have already made sure that we update on changes
				}
			});
		}
	},
	logoutUser: function(){
		return function(dispatch,getState){
			dispatch({type:C.LOGOUT}); // don't really need to do this, but nice to get immediate feedback
			fireRef.unauth();
		}
	}
};
