import C from "../../constants";
import initialState from "../initialstate";

/*
 A reducer is a function that takes the current state and an action, and then returns a
 new state. This reducer is responsible for appState.auth data.
 See `initialstate.js` for a clear view of what it looks like!
 */

export default (currentstate, action) => {
    switch (action.type) {
        case C.ATTEMPTING_LOGIN:
            return {
                currently: C.AWAITING_AUTH_RESPONSE,
                username: "guest",
                uid: null
            };
        case C.LOGOUT:
            return {
                currently: C.ANONYMOUS,
                username: "guest",
                uid: null
            };
        case C.LOGIN_USER:
            return {
                currently: C.LOGGED_IN,
                username: action.username,
                uid: action.uid
            };
        default:
            return currentstate || initialState.auth;
    }
};