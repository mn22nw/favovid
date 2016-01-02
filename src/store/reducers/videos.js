var C = require("../../constants"),
	initialState = require("../initialstate"),
	_ = require("lodash");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.quotes data.
See `initialstate.js` for a clear view of what it looks like!
*/

module.exports = function(currentstate,action){
	var newstate;
	switch(action.type){
		case C.RECEIVE_VIDEO_DATA:
			return Object.assign({},currentstate,{
				hasreceiveddata: true,
				data: action.data
			});
		case C.AWAIT_NEW_QUOTE_RESPONSE:
			return Object.assign({},currentstate,{
				submittingnew: true
			});
		case C.RECEIVE_NEW_QUOTE_RESPONSE:
			return Object.assign({},currentstate,{
				submittingnew: false
			});
		case C.LOAD_VIDEO:
			newstate = _.cloneDeep(currentstate);
			newstate.states[action.youtubeid] = C.PLAY_VIDEO;
			return newstate;
		case C.FINISH_QUOTE_EDIT:
			newstate = _.cloneDeep(currentstate);
			delete newstate.states[action.qid];
			return newstate;
		case C.SUBMIT_QUOTE_EDIT:
			newstate = _.cloneDeep(currentstate);
			newstate.states[action.qid] = C.SUBMITTING_QUOTE;
			return newstate;
		default: return currentstate || initialState.videos;
	}
};