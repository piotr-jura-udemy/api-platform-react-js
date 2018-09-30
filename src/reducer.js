import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";

export default combineReducers({
  blogPostList,
  blogPost
});
