import {BLOG_POST_LIST, BLOG_POST_LIST_ADD} from "../actions/actions";

export default(state = {
  posts: null,
  anotherState: 'Hi'
}, action) => {
  switch (action.type) {
    case BLOG_POST_LIST:
      return {
        ...state,
        posts: action.data
      };
    case BLOG_POST_LIST_ADD:
      return {
        ...state,
        posts: state.posts ? state.posts.concat(action.data) : state.posts
      };
    default:
      return state;
  }
}
