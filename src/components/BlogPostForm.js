import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {canWriteBlogPost} from "../apiUtils";
import {Redirect} from "react-router";

const mapDispatchToProps = {

};

const mapStateToProps = state => ({
  userData: state.auth.userData
});

class BlogPostForm extends React.Component {
  render() {
    if (!canWriteBlogPost(this.props.userData)) {
      return <Redirect to="/login"/>
    }

    return (<div>Create a new BlogPost!</div>)
  }
}

export default reduxForm({
  form: 'BlogPostForm'
})(connect(mapStateToProps, mapDispatchToProps)(BlogPostForm))
