import React from 'react';

export default class BlogPostContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        Hello from BlogPost!
      </div>
    )
  }
}
