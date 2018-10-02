import React from 'react';
import {reduxForm} from 'redux-form';

class LoginForm extends React.Component {
  render() {
    return (<div>Hello from LoginForm!</div>)
  }
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);
