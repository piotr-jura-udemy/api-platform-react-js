import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostList} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  ...state.blogPostList
});

const mapDispatchToProps = {
  blogPostList,
  blogPostAdd
};

class BlogPostListContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.blogPostList();
  }

  render() {
    console.log(this.props);
    return (<BlogPostList posts={this.props.posts} />)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);
