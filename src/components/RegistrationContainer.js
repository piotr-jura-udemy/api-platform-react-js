import React from "react";
import RegisterForm from "./RegisterForm";
import {connect} from "react-redux";
import ConfirmationForm from "./ConfirmationForm";

const mapStateToProps = state => ({
  ...state.registration
});

class RegistrationContainer extends React.Component {
  render() {
    const {registrationSuccess, confirmationSuccess} = this.props;

    if (!registrationSuccess) {
      return <RegisterForm/>;
    }

    if (!confirmationSuccess) {
      return <ConfirmationForm/>
    }
  }
}

export default connect(mapStateToProps, null)(RegistrationContainer);
