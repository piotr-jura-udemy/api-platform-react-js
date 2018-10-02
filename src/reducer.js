import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import {reducer as formReducer} from 'redux-form';
import auth from "./reducers/auth";
import {routerReducer} from "react-router-redux";

export default combineReducers({
  blogPostList,
  blogPost,
  commentList,
  auth,
  router: routerReducer,
  form: formReducer
});
