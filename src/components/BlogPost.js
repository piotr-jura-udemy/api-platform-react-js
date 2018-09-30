import React from 'react';

export class BlogPost extends React.Component {
  render() {
    const {post, isFetching} = this.props;

    if (isFetching) {
      return (<div><i className="fas fa-spinner fa-spin"/></div>);
    }

    if (null === post) {
      return (<div>Blog post does not exist</div>);
    }

    return (
      <div>
        {post.title}
      </div>
    )
  }
}
