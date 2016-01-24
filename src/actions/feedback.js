/*
This module contains action creators dealing with `appState.feedback`
The only thing that can happen here is that user dismisses feedback.
*/

import C from "../constants";

export default {
	dismissFeedback: function(num){
		return {type:C.DISMISS_FEEDBACK,num:num};
	}
};
