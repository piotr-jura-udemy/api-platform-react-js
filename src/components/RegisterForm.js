import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../form";

class RegisterForm extends React.Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="card mt-3 mb-6 shadow-sm">
        <div className="card-body">
          <form>
            <Field name="username" label="Username:" type="text" component={renderField}/>
            <Field name="password" label="Password:" type="password" component={renderField}/>
            <Field name="retypedPassword" label="Re-type password:" type="password" component={renderField}/>
            <Field name="email" label="E-mail:" type="text" component={renderField}/>
            <Field name="name" label="Full name:" type="text" component={renderField}/>

            <div className="form-check form-group">
              <input className="form-check-input" type="checkbox" value={false}/>
              <label className="form-check-label">I agree to the terms and conditions</label>
            </div>

            <button type="submit" className="btn btn-primary btn-big btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'RegisterForm'
})(RegisterForm)
