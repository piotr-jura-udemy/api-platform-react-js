import React from 'react';
import {blogPostFetch, blogPostUnload} from "../actions/actions";
import {connect} from "react-redux";
import {BlogPost} from "./BlogPost";
import {Spinner} from "./Spinner";

const mapeStateToProps = state => ({
  ...state.blogPost
});

const mapDispatchToProps = {
  blogPostFetch,
  blogPostUnload
};

class BlogPostContainer extends React.Component {
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.blogPostUnload();
  }

  render() {
    const {isFetching, post} = this.props;

    if (isFetching) {
      return (<Spinner/>);
    }

    return (<BlogPost post={post}/>)
  }
}

export default connect(mapeStateToProps, mapDispatchToProps)(BlogPostContainer);
