import React from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";
import Header from "./Header";
import BlogPostContainer from "./BlogPostContainer";
import {requests} from "../agent";

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem('jwtToken');

    if (token) {
      requests.setToken(token);
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/blog-post/:id" component={BlogPostContainer}/>
          <Route path="/" component={BlogPostListContainer}/>
        </Switch>
      </div>
    )
  }
}

export default App;
