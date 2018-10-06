import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../form";

class ConfirmationForm extends React.Component {
  render() {
    const {handleSubmit, submitting} = this.props;

    return (
      <div className="card mt-3 mb-6 shadow-sm">
        <div className="card-body">
          <p className="card-text">
            Please confirm your account with token you received in e-mail.
          </p>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name="confirmationToken" label="Confirmation token:"
                   type="text" component={renderField}/>

            <button type="submit" className="btn btn-primary btn-big btn-block"
                    disabled={submitting}>
              Confirm your account!
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'ConfirmationForm'
})(ConfirmationForm);
