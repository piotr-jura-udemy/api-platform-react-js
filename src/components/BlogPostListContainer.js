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
    this.props.blogPostListFetch(this.getQueryParamPage());
  }

  componentDidUpdate(prevProps) {
    const {currentPage, blogPostListFetch, blogPostListSetPage} = this.props;

    if (prevProps.match.params.page !== this.getQueryParamPage()) {
      blogPostListSetPage(this.getQueryParamPage());
    }

    if (prevProps.currentPage !== currentPage) {
      blogPostListFetch(currentPage);
    }
  }

  getQueryParamPage() {
    return Number(this.props.match.params.page) || 1;
  }

  changePage(page) {
    const {history, blogPostListSetPage} = this.props;
    blogPostListSetPage(page);
    history.push(`/${page}`);
  }

  onNextPageClick(e) {
    const {currentPage, pageCount} = this.props;
    const newPage = Math.min(currentPage + 1, pageCount);
    this.changePage(newPage);
  }

  onPrevPageClick(e) {
    const {currentPage} = this.props;
    const newPage = Math.max(currentPage - 1, 1);
    this.changePage(newPage);
  }

  render() {
    const {posts, isFetching, currentPage, pageCount} = this.props;

    if (isFetching) {
      return (<Spinner/>);
    }

    return (
      <div>
        <BlogPostList posts={posts}/>
        <Paginator currentPage={currentPage} pageCount={pageCount}
                   setPage={this.changePage.bind(this)}
                   nextPage={this.onNextPageClick.bind(this)}
                   prevPage={this.onPrevPageClick.bind(this)}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
