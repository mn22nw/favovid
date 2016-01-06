module.exports = {
	validateVideo: function(youtubeUrl){
		if (!youtubeUrl || youtubeUrl.length < 11){
			return "Not a valid youtube url. Please try again";
		}

		if(this.extractYoutubeID(youtubeUrl) == false) {
			console.log('FALSY ID')
		}
	} ,
	
	// I've used this method -->  https://ctrlq.org/code/19797-regex-youtube-id
	extractYoutubeID: function(url){
	    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    if ( match && match[7].length == 11 ){
	        return match[7];
	    }else{
	        console.log("Could not extract video ID.");
	        return false;
	    }
	}
	
};