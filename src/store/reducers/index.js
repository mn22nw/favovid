var Redux = require("redux"),
	authReducer = require("./auth"),
	videosReducer = require("./videos"),
	feedbackReducer = require("./feedback"), 
	usersReducer =  require("./users"),
	countReducer = require('./count');

//import { combineReducers} from 'redux'

import { routeReducer } from 'redux-simple-router'

/*
const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
  auth: authReducer,
  videos: videosReducer,
  feedback: feedbackReducer,
  count: countReducer
})) 
*/


//include the routing here! 
var rootReducer = Redux.combineReducers({
	routing: routeReducer,
	auth: authReducer,
	videos: videosReducer,
	feedback: feedbackReducer,
	users: usersReducer,
	count: countReducer
});  

module.exports = rootReducer;

//TODO cleanup.