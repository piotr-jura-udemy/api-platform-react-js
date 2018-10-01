import React from 'react';
import {Message} from "./Message";

export class CommentList extends React.Component {
  render() {
    const {commentList} = this.props;
    console.log(commentList);

    if (null === commentList) {
      return (<Message message="No comments yet"/>);
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        Not done yet...
      </div>
    )
  }
}
