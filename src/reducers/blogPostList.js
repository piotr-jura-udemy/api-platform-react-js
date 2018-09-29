import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR
} from "../actions/actions";

export default(state = {
  posts: null,
  isFetching: false
}, action) => {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true,
      };
      console.log(state);
      return state;
    case BLOG_POST_LIST_RECEIVED:
      state = {
        ...state,
        posts: action.data['hydra:member'],
        isFetching: false
      };
      console.log(state);
      return state;
    case BLOG_POST_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        posts: null
      };
    case BLOG_POST_LIST_ADD:
      state = {
        ...state,
        posts: state.posts ? state.posts.concat(action.data) : state.posts
      };
      console.log(state);
      return state;
    default:
      return state;
  }
}
