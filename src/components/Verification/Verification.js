import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { successMessageAlert, errorMessageAlert } from '../../helpers';
import { clearError, clearMessage, sendVerificationMail } from '../../actions';

class Verification extends Component {
  // to show the message and error if any

  componentDidUpdate() {
    const { message, error, dispatch } = this.props;
    if (message !== null) {
      successMessageAlert('Mail Sent', message.detail);
      dispatch(clearMessage());
    }

    if (error !== null) {
      errorMessageAlert('Sending Mail Failed', error.detail);
      dispatch(clearError());
    }
    return;
  }

  handleResendMail = () => {
    this.props.dispatch(sendVerificationMail());
    return <Redirect to="/signin" />;
  };

  render() {
    const { isLoggedIn, isVerified, isLoading } = this.props;
    if (isLoggedIn === false) {
      return <Redirect to="/signin" />;
    }
    if (isVerified === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signin-container verification-container">
        <div className="heading unselectable">Verification</div>
        <div className="verification-message">
          Please check your mail for Verification and verify your Account
        </div>
        <div className="resend-mail unselectable">
          <span
            className="button-span"
            disabled={isLoading}
            onClick={this.handleResendMail}
          >
            Resend Mail
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isVerified: state.auth.isVerified,
    message: state.alert.message,
    error: state.alert.error,
    isLoading: state.progress.isLoading,
  };
}

export default connect(mapStateToProps)(Verification);
