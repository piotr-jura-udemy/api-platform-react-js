import React from 'react';
import {Link} from "react-router-dom";



export default class Header extends React.Component {
  renderUser() {
    const {userData, logout} = this.props;

    if (null === userData) {
      return (<i className="fas fa-spinner fa-spin"/>);
    }

    return (
      <span>
        Hello {userData.name},&nbsp;
        <button className="btn btn-link btn-sm" href="#" onClick={logout}>Logout</button>
      </span>
    );
  }

  render() {
    const {isAuthenticated} = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <span className="navbar-text">
          {isAuthenticated ? this.renderUser() : <Link to="/login">Sign-in</Link>}
        </span>
      </nav>
    );
  }
}
