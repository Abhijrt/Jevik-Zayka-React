import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { verifyAccount, setError, setMessage } from '../../actions';

class VerifyEmail extends Component {
  componentDidMount() {
    const { isVerified, dispatch } = this.props;
    if (isVerified === true) {
      dispatch(setMessage('Email Already Verified'));
      return <Redirect to="/signin" />;
    }
    const { params } = this.props.match;
    dispatch(verifyAccount(params.verification_token));
  }

  componentDidUpdate() {
    const { error, message, dispatch } = this.props;
    if (error !== null) {
      dispatch(setError('Email Verfication Failed'));
      return <Redirect to="/signin" />;
    }
    if (message !== null) {
      dispatch(setMessage('Email Verified Successfully'));
      return <Redirect to="/signin" />;
    }
  }

  render() {
    return <Redirect to="/signin" />;
  }
}

function mapStateToProps(state) {
  return {
    isVerified: state.auth.isVerified,
    message: state.alert.message,
    error: state.alert.error,
  };
}

export default connect(mapStateToProps)(VerifyEmail);
