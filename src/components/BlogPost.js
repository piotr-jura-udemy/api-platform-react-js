import React from 'react';
import timeago from 'timeago.js';

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
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <h2>{post.title}</h2>
          <p className="card-text">{post.content}</p>
          <p className="card-text border-top">
            <small className="text-muted">
              {timeago().format(post.published)} by&nbsp;
              {post.author.name}
            </small>
          </p>
        </div>
      </div>
    )
  }
}
