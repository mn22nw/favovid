/*
This module contains action creators dealing with `appState.auth`
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	fireRef = new Firebase(C.FIREBASE);

import { updatePath } from 'redux-simple-router';


var hej = function() { console.log('hej')}


module.exports = {
	// called at app start
	startListeningToAuth: function(){
		return function(dispatch,getState){
			fireRef.onAuth(function(authData){
				if (authData){ 	

					// check if user is registered or not! 
    				fireRef.child('users/'+authData.uid).once('value', function(snap) {
				       console.log( 'Whats the valuee yo?' , snap.val() );

				       if (snap.val() == null) {
				       	console.log('YOU MUST REGISTER FIRST....');
				       // TODO - add userfeedback like a message that says - it seems like you don't have an account yet. You can create one here:
				       // redirect to sign up
					       	dispatch(updatePath('/signUp'));
				       }
				       else {

					       	dispatch({
							type: C.LOGIN_USER,
							uid: authData.uid,
							username: authData.google.displayName || authData.google.username
							});

					       	// redirect to dashboard
					       	dispatch(updatePath('/dashboard'));
				       }

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
