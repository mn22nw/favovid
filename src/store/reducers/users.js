import C from "../../constants";
import initislState from "../initialstate";

/*
 A reducer is a function that takes the current state and an action, and then returns a
 new state. This reducer is responsible for appState.users data.
 See `initialstate.js` for a clear view of what it looks like!
 */

export default (currentstate, action)=> {
    switch (action.type) {
        case C.ATTEMPTING_SIGNUP:
            return {
                submittingnew: true
            };
        default:
            return currentstate || initialState.users;
    }
};