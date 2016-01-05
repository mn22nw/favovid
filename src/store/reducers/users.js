var C = require("../../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.users data.
See `initialstate.js` for a clear view of what it looks like!
*/

module.exports = function(currentstate,action){
	switch(action.type){
		case C.ATTEMPTING_SIGNUP:
			return {
				submittingnew: true,
			};

		default: return currentstate || initialState.users;
	}
};