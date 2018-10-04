import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {connect} from "react-redux";
import {renderField} from "../form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class CommentForm extends React.Component {
  onSubmit(values) {
    return sleep(2000).then(() => {
      throw new SubmissionError({content: 'Invalid comment'});
    });
  }

  render() {
    const {handleSubmit, submitting} = this.props;

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field name="content" label="Type your comment:" type="textarea" component={renderField}/>
            <button type="submit" className="btn btn-primary btn-big btn-block"
                    disabled={submitting}>
              Add Comment
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'CommentForm'
})(connect(null, null)(CommentForm))
