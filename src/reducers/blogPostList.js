import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR, BLOG_POST_LIST_SET_PAGE
} from "../actions/constants";

export default(state = {
  posts: null,
  isFetching: false,
  currentPage: 1,
  pageCount: null
}, action) => {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true,
      };
      return state;
    case BLOG_POST_LIST_RECEIVED:
      state = {
        ...state,
        posts: action.data['hydra:member'],
        isFetching: false
      };
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
      return state;
    case BLOG_POST_LIST_SET_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    default:
      return state;
  }
}
