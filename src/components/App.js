import React from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "./BlogPostListContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello!
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/" component={BlogPostListContainer}/>
        </Switch>
      </div>
    )
  }
}

export default App;
