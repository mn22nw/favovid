var authActions = require("./auth"),
	videosActions = require("./videos"),
	feedbackActions = require("./feedback");

module.exports = Object.assign({},authActions,videosActions,feedbackActions);