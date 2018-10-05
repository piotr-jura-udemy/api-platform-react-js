import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostListFetch, blogPostListSetPage} from "../actions/actions";
import {connect} from "react-redux";
import {Spinner} from "./Spinner";
import {Paginator} from "./Paginator";

const mapStateToProps = state => ({
  ...state.blogPostList
});

const mapDispatchToProps = {
  blogPostListFetch, blogPostListSetPage
};

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    this.props.blogPostListFetch();
  }

  componentDidUpdate(prevProps) {
    const {currentPage, blogPostListFetch} = this.props;

    if (prevProps.currentPage !== currentPage) {
      blogPostListFetch(currentPage);
    }
  }

  render() {
    const {posts, isFetching, blogPostListSetPage, currentPage} = this.props;

    if (isFetching) {
      return (<Spinner/>);
    }

    return (
      <div>
        <BlogPostList posts={posts}/>
        <Paginator currentPage={currentPage} pageCount={10} setPage={blogPostListSetPage} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
