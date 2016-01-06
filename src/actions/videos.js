/*
This module contains action creators dealing with `appState.quotes`
*/

var C = require("../constants"),
	Firebase = require("firebase"),
	videosRef = new Firebase(C.FIREBASE).child("videos"),
	fireRef = new Firebase(C.FIREBASE),
	apiKey = 'AIzaSyCr7TnkVW9eIRHEvrM6eqZEUqBhbkL2nDU',
	utils = require("../utils");

var $ = require('jquery')

module.exports = {
	// called when the app starts. this means we immediately download all videoids, and 
	// then receive all videoids again as soon as anyone changes anything.
	fetchVideos: function(){
		return function(dispatch,getState){
			fireRef.onAuth(function(authData){
				if (authData){ 	

					var uid = authData.uid,
					userVideosRef = fireRef.child('users/' + uid);				

					userVideosRef.on("value",function(snapshot){
						console.log(snapshot.val(), 'SNAPSHOTOTOT')
						dispatch({ type: C.RECEIVE_VIDEO_DATA, data: snapshot.val() });
					});
				}
			});
		}
	},
	startQuoteEdit: function(qid){
		return {type:C.START_QUOTE_EDIT,qid};
	},
	cancelQuoteEdit: function(qid){
		return {type:C.FINISH_QUOTE_EDIT,qid};
	},
	deleteQuote: function(qid){
		return function(dispatch,getState){
			dispatch({type:C.SUBMIT_QUOTE_EDIT,qid});
			videosRef.child(qid).remove(function(error){
				dispatch({type:C.FINISH_QUOTE_EDIT,qid});
				if (error){
					dispatch({type:C.DISPLAY_ERROR,error:"Deletion failed! "+error});
				} else {
					dispatch({type:C.DISPLAY_MESSAGE,message:"Quote successfully deleted!"});
				}
			});
		};
	},
	submitQuoteEdit: function(qid,content){
		return function(dispatch,getState){
			var state = getState(),
				username = state.auth.username,
				uid = state.auth.uid,
				error = utils.validateQuote(content);
			if (error){
				dispatch({type:C.DISPLAY_ERROR,error});
			} else {
				dispatch({type:C.SUBMIT_QUOTE_EDIT,qid});
				videosRef.child(qid).set({content,username,uid},function(error){
					dispatch({type:C.FINISH_QUOTE_EDIT,qid});
					if (error){
						dispatch({type:C.DISPLAY_ERROR,error:"Update failed! "+error});
					} else {
						dispatch({type:C.DISPLAY_MESSAGE,message:"Update successfully saved!"});
					}
				});
			}
		};
	},
	loadVideo: function(youtubeid) {
		return {type:C.LOAD_VIDEO, youtubeid};
	}
	,
	addNewVideo: function(youtubeUrl){
		return function(dispatch,getState){ 
			var state = getState(),
				username = state.auth.username,
				uid = state.auth.uid,
				error = utils.validateVideo(youtubeUrl),
				youtubeid = utils.extractYoutubeID(youtubeUrl);
				console.log('THE YOUTUBEID IS ', youtubeid)
			if (error){
				dispatch({type:C.DISPLAY_ERROR, error});
			} else {
				//dispatch({type:C.AWAIT_NEW_VIDEO_RESPONSE});


				// fetch title from youtube API					

				function getYouTubeInfo(youtubeid) {
					console.log('getting Youtubeinfoo')
	                $.ajax({
	                        url: "https://www.googleapis.com/youtube/v3/videos?id="+youtubeid+"&key=" + apiKey + "&fields=items(id,snippet(title),statistics)&part=snippet",
	                        dataType: "jsonp",
	                        success: function (data) { parseresults(data) }
	                });
	       		 }

		        function parseresults(data) {
		        	// Check if video exist on youtube
		        	if (data.items[0] == undefined) {
		        		error = 'Couldn\'t find the youtube video';
		        		dispatch({type:C.DISPLAY_ERROR, error});
		        	}
		        	else {
		        		var title = data.items[0]['snippet']['title'];
							
						var newVideo = {
								title: title,
								tags: 'dashboard'
							} ;

						// add video to firebasee 

						var userVideosRef = fireRef.child('users/'+uid +'/videos/' + youtubeid).set(newVideo);
						dispatch({type:C.DISPLAY_MESSAGE, message: 'The video was successfully added.'});	
						//TODO - add error handling and display error feedback
				        }
		        }

		        getYouTubeInfo(youtubeid);
				/*
				videosRef.push({youtubeUrl,username,uid},function(error){
					dispatch({type:C.RECEIVE_NEW_QUOTE_RESPONSE});
					if (error){
						dispatch({type:C.DISPLAY_ERROR,error:"Submission failed! "+error});
					} else {
						dispatch({type:C.DISPLAY_MESSAGE,message:"Submission successfully saved!"});
					}
				});
*/
			}
		}
	}
};
