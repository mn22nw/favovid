import C from "../constants";
import actions from '../actions';
import Firebase from "firebase";

const fireRef = new Firebase(C.FIREBASE);
const usersRef = fireRef.child('users');

export default {
    signUpUserWithEmail: function (username, email, password) {
        // TODO - Validate username before adding!!
        console.log('User details: ', username, email, password)
        return function (dispatch, getState) {
            dispatch({type: C.ATTEMPTING_SIGNUP});
            fireRef.createUser({
                email: email,
                password: password
            }, function (error, authResponse) {
                const authObj = authResponse;
                const newUser = {
                    username: username,
                    email: email
                };

                // add new user to firebase users
                fireRef.child('users/' + authObj.uid).set(newUser);

                //dispatch({type:C.SIGNED_UP});
                //TODO - dispatch username etc...
            });
        }
    },
    signUpUserWithGoogle: function () {
        return function (dispatch, getState) {
            dispatch({type: C.ATTEMPTING_SIGNUP});
            console.log('trying to sign up with google yall');
            fireRef.authWithOAuthPopup("google", function (error, authData) {
                if (error) {
                    dispatch({type: C.DISPLAY_ERROR, error: "Registered failed! " + error});
                } else {
                    console.log('ADDING TO DATABASE YOOOOOO');
                    // add user to firebase
                    const newUser = {
                        username: authData.google.displayName || authData.google.username,
                        googleid: authData.google.id
                    };

                    // add new user to firebase users
                    fireRef.child('users/' + authData.uid).set(newUser);

                    //Todo- redirect to dashboard....
                    //
                }
            });
        }
    }
};
