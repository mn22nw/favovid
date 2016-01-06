var Redux = require("redux"),
	authReducer = require("./auth"),
	videosReducer = require("./videos"),
	feedbackReducer = require("./feedback"), 
	usersReducer =  require("./users"),
	countReducer = require('./count');

import { routeReducer } from 'redux-simple-router'

var rootReducer = Redux.combineReducers({
	routing: routeReducer,
	auth: authReducer,
	videos: videosReducer,
	feedback: feedbackReducer,
	users: usersReducer,
	count: countReducer
});  

module.exports = rootReducer;
