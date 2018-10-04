import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {renderField} from "../form";
import {commentAdd} from "../actions/actions";

const mapDispatchToProps = {
  commentAdd
};

class CommentForm extends React.Component {
  onSubmit(values) {
    const {commentAdd, blogPostId} = this.props;
    return commentAdd(values.content, blogPostId);
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
})(connect(null, mapDispatchToProps)(CommentForm))
