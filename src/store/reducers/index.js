import Redux from "redux";
import { routeReducer } from 'redux-simple-router'
import authReducer from "./auth";
import videosReducer from "./videos";
import feedbackReducer from "./feedback";
import usersReducer from "./users";
import countReducer from './count';

export default Redux.combineReducers({
    routing: routeReducer,
    auth: authReducer,
    videos: videosReducer,
    feedback: feedbackReducer,
    users: usersReducer,
    count: countReducer
});
