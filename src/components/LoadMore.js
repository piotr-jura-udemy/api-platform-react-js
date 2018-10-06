import React from "react";

export class LoadMore extends React.Component {
  render() {
    const {label, disabled, onClick} = this.props;

    return (
      <button className="btn btn-block btn-dark" disabled={disabled} onClick={onClick}>
        {label}
      </button>
    )
  }
}
