import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";

export default combineReducers({
  blogPostList,
  blogPost,
  commentList
});
