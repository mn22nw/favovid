var authActions = require("./auth"),
	videosActions = require("./videos"),
	feedbackActions = require("./feedback"),
	_ = require("lodash"),
	counterActions = require('./count');

module.exports = _.assign({},authActions,videosActions,feedbackActions, counterActions);