import authActions from "./auth";
import videosActions from "./videos";
import feedbackActions from "./feedback";
import userActions from "./createUser";
import counterActions from './count';

export default Object.assign({}, authActions, videosActions, feedbackActions, userActions, counterActions);