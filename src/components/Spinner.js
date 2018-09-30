import React from 'react';

export class Spinner extends React.Component {
  render() {
    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <i className="fas fa-spinner fa-spin"/>
        </div>
      </div>
    );
  }
}
