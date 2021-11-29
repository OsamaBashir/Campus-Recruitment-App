import { combineReducers } from "redux";
import applyJob from "./applyJob";
import login from "./login";
import postJob from "./postJob";

const rootReducer = combineReducers({
  auth: login,
  postJob: postJob,
  applyJob: applyJob,
});

export default rootReducer;
