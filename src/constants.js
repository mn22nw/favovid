/*
This file contains all would-be-magic-strings in the app.
*/

module.exports = {
	// MISC
	FIREBASE: "https://favovid.firebaseio.com/",

	// UI FEEDBACK ACTIONS
	DISPLAY_ERROR: "DISPLAY_ERROR",
	DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
	DISMISS_FEEDBACK: "DISMISS_FEEDBACK",

	// AUTH ACTIONS
	ATTEMPTING_LOGIN: "ATTEMPTING_LOGIN",
	LOGIN_USER: "LOGIN_USER",
	LOGOUT: "LOGOUT",

	// AUTH STATES
	LOGGED_IN: "LOGGED_IN",
	ANONYMOUS: "ANONYMOUS",
	AWAITING_AUTH_RESPONSE: "AWAITING_AUTH_RESPONSE",

	// VIDEO ACTIONS
	RECEIVE_VIDEO_DATA: "RECEIVE_VIDEO_DATA",
	LOAD_VIDEO: "LOAD_VIDEO",
	PLAY_VIDEO: 'PLAY_VIDEO',
	RECEIVE_NEW_QUOTE_RESPONSE: "RECEIVE_NEW_QUOTE_RESPONSE",
	START_QUOTE_EDIT: "START_QUOTE_EDIT",
	FINISH_QUOTE_EDIT: "FINISH_QUOTE_EDIT",
	SUBMIT_QUOTE_EDIT: "SUBMIT_QUOTE_EDIT",

	// QUOTE STATES
	EDITING_QUOTE: "EDITING_QUOTE",
	SUBMITTING_QUOTE: "SUBMITTING_QUOTE",

	//COUNTER BASIC EXAMPLE
	INCREASE: 'INCREASE',
  	DECREASE: 'DECREASE'

};