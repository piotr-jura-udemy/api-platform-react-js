import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <span className="navbar-text">
          <Link to="/login">Sign-in</Link>
        </span>
      </nav>
    );
  }
}
