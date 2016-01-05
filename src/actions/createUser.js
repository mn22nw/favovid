var C = require("../constants"),
	Firebase = require("firebase"),
	fireRef = new Firebase(C.FIREBASE),
	usersRef = fireRef.child('users');

module.exports = {
	signUpUserWithEmail: function(mail, pw){
		return function(dispatch,getState ){
			dispatch({type:C.ATTEMPTING_SIGNUP});
			console.log('NAEEMSMS: ' , mail, pw)
			/*fireRef.createUser({
				email:mail,
				password: pw
			}, function(error, authResponse) {
				authObj = authResponse;
			});
			*/

		}
	},
	signUpUserWithGoogle: function(){
		return function(dispatch,getState){
			dispatch({type:C.ATTEMPTING_SIGNUP}); 
			
		}
	}
};
