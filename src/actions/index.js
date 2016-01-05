var authActions = require("./auth"),
	videosActions = require("./videos"),
	feedbackActions = require("./feedback"),
	userActions = require("./createUser"),
	_ = require("lodash"),
	counterActions = require('./count');

module.exports = _.assign({},authActions,videosActions,feedbackActions, userActions, counterActions);