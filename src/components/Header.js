import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render() {
    const {isAuthenticated} = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <span className="navbar-text">
          {isAuthenticated ? <span>Hello User!</span> : <Link to="/login">Sign-in</Link>}
        </span>
      </nav>
    );
  }
}
