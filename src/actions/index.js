var authActions = require("./auth"),
	videosActions = require("./videos"),
	feedbackActions = require("./feedback"),
	counterActions = require('./count');

module.exports = Object.assign({},authActions,videosActions,feedbackActions, counterActions);