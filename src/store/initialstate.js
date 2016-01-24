/*
This is the initial state of the Redux Store.
*/

import C from "../constants";

export default {
	feedback: [
	],
	auth: {
		currently: C.ANONYMOUS,
		username: null,
		uid: null
	},
	users: {
		submittingnew: false
	},
	videos: {
		hasreceiveddata: false,
		submittingnew: false,
		states: {}, // this will store per video id if we're reading, playing, editing or awaiting DB response
		data: {} // this will contain firebase data
	}
};