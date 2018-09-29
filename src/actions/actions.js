import {requests} from "../agent";

export const BLOG_POST_LIST_REQUEST = 'BLOG_POST_REQUEST';
export const BLOG_POST_LIST_RECEIVED = 'BLOG_POST_LIST_RECEIVED';
export const BLOG_POST_LIST_ERROR = 'BLOG_POST_LIST_ERROR';
export const BLOG_POST_LIST_ADD = 'BLOG_POST_LIST_ADD';

export const blogPostListRequest = () => ({
  type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListError = (error) => ({
  type: BLOG_POST_LIST_ERROR,
  error
});

export const blogPostListReceived = (data) => ({
  type: BLOG_POST_LIST_RECEIVED,
  data
});

export const blogPostListFetch = () => {
  return (dispatch) => {
    dispatch(blogPostListRequest());
    return requests.get('/blog_posts')
      .then(response => dispatch(blogPostListReceived(response)))
      .catch(error => dispatch(blogPostListError(error)));
  }
};

export const blogPostAdd = () => ({
  type: BLOG_POST_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 + 3),
    title: 'A newly added blog post'
  }
});
