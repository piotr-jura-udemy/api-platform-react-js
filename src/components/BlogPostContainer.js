import React from 'react';
import {blogPostFetch} from "../actions/actions";
import {connect} from "react-redux";

const mapeStateToProps = state => ({
  ...state.blogPost
});

const mapDispatchToProps = {
  blogPostFetch
};

class BlogPostContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id);
    this.props.blogPostFetch(this.props.match.params.id).then(_ => console.log(this.props.post));
  }

  render() {
    return (
      <div>
        Hello from BlogPost!
      </div>
    )
  }
}

export default connect(mapeStateToProps, mapDispatchToProps)(BlogPostContainer);
