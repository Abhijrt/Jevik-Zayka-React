import React, { Component, createRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input } from '../../components';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import {
  missingFieldAlert,
  errorMessageAlert,
  successMessageAlert,
} from '../../helpers';
import { clearError, clearMessage, loadingStop } from '../../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirm_password: '',
      mobileNumber: '',
      validation_status: {
        capitalLetter: false,
        smallLetter: false,
        specialCharacter: false,
        number: false,
        lengthCheck: false,
      },
      formRef: createRef(),
    };
  }

  componentDidUpdate() {
    const { error, dispatch, message, isLoading } = this.props;

    if (message != null) {
      successMessageAlert(message.title, message.detail);
      dispatch(clearMessage());
      this.state.formRef.current.reset();
    }

    if (error != null) {
      errorMessageAlert('Registration Error', error);
      dispatch(clearError());
      this.state.formRef.current.reset();
    }
    if (isLoading === true) {
      dispatch(loadingStop());
    }
  }

  // checking for password validation in password input
  checkValidation = (value) => {
    let capitalLetterRegx = /[A-Z]/;
    let smallLetterRegx = /[a-z]/;
    let numberRegx = /[0-9]/i;
    let specialCharRegx = /\W|_/;
    let validation_status = {
      capitalLetter: false,
      smallLetter: false,
      specialCharacter: false,
      number: false,
      lengthCheck: false,
    };

    if (capitalLetterRegx.test(value)) {
      validation_status.capitalLetter = true;
    }
    if (smallLetterRegx.test(value)) {
      validation_status.smallLetter = true;
    }
    if (specialCharRegx.test(value)) {
      validation_status.specialCharacter = true;
    }
    if (numberRegx.test(value)) {
      validation_status.number = true;
    }

    if (value.length >= 6) {
      validation_status.lengthCheck = true;
    }
    return validation_status;
  };

  // setting the value of input in state on changing input
  handleOnChange = (label, value) => {
    if (label === 'Email') {
      this.setState({ email: value });
    } else if (label === 'First Name') {
      this.setState({ firstName: value });
    } else if (label === 'Last Name') {
      this.setState({ lastName: value });
    } else if (label === 'Password') {
      this.setState({
        password: value,
        validation_status: this.checkValidation(value),
      });
    } else if (label === 'Confirm Password') {
      this.setState({ confirm_password: value });
    } else if (label === 'Mobile Number') {
      this.setState({ mobileNumber: value });
    }
  };

  // handling form submission for sign up button
  handleSignUp = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const {
      email,
      firstName,
      lastName,
      password,
      confirm_password,
      mobileNumber,
    } = this.state;
    if (email.length === 0) {
      missingFieldAlert('Missing Field', 'Email');
      return;
    } else if (firstName.length === 0) {
      missingFieldAlert('Missing Field', 'First Name');
      return;
    } else if (lastName.length === 0) {
      missingFieldAlert('Missing Field', 'Last Name');
    } else if (password.length === 0) {
      missingFieldAlert('Missing Field', 'Password');
      return;
    } else if (confirm_password !== password) {
      if (confirm_password.length === 0) {
        missingFieldAlert('Missing Field', 'Confrim Password');
      } else {
        missingFieldAlert(
          'Password and Confirm Password are not Same',
          'Same Passwords'
        );
      }
      return;
    } else if (mobileNumber.length === 0) {
      missingFieldAlert('Missing Field', 'Mobile Number');
      return;
    }

    const {
      capitalLetter,
      smallLetter,
      specialCharacter,
      number,
      lengthCheck,
    } = this.state.validation_status;

    if (
      capitalLetter === false ||
      smallLetter === false ||
      specialCharacter === false ||
      number === false ||
      lengthCheck === false
    ) {
      missingFieldAlert('Invalid Password', 'Valid Password');
    }

    dispatch(
      signUp(
        email,
        firstName,
        lastName,
        password,
        confirm_password,
        mobileNumber
      )
    );

    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirm_password: '',
      mobileNumber: '',
      validation_status: {
        capitalLetter: false,
        smallLetter: false,
        specialCharacter: false,
        number: false,
        lengthCheck: false,
      },
    });
    this.state.formRef.current.reset();
  };

  // rendering sign up component
  render() {
    const {
      capitalLetter,
      smallLetter,
      specialCharacter,
      number,
      lengthCheck,
    } = this.state.validation_status;
    const { message, isLoggedIn } = this.props;
    if (isLoggedIn === true) {
      return <Redirect to="/" />;
    }
    if (message != null) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="signin-container sign-up-container">
        <div className="heading unselectable">Register</div>
        <form ref={this.state.formRef}>
          <Input
            width="100%"
            type="email"
            label="Email"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.email}
          />
          <Input
            width="100%"
            type="text"
            label="First Name"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.Name}
          />
          <Input
            width="100%"
            type="text"
            label="Last Name"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.Name}
          />
          <Input
            width="100%"
            type="password"
            label="Password"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.password}
          />
          <div className="password-validator-container">
            <div
              className={
                capitalLetter
                  ? 'password-validator password-validator-green'
                  : 'password-validator'
              }
            >
              {capitalLetter ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times" aria-hidden="true"></i>
              )}
              Capital Letter
            </div>
            <div
              className={
                smallLetter
                  ? 'password-validator password-validator-green'
                  : 'password-validator'
              }
            >
              {smallLetter ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times" aria-hidden="true"></i>
              )}
              Small Letter
            </div>
            <div
              className={
                specialCharacter
                  ? 'password-validator password-validator-green'
                  : 'password-validator'
              }
            >
              {specialCharacter ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times" aria-hidden="true"></i>
              )}
              Special Character
            </div>
            <div
              className={
                number
                  ? 'password-validator password-validator-green'
                  : 'password-validator'
              }
            >
              {number ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times" aria-hidden="true"></i>
              )}
              Number
            </div>
            <div
              className={
                lengthCheck
                  ? 'password-validator password-validator-green'
                  : 'password-validator'
              }
            >
              {lengthCheck ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-times" aria-hidden="true"></i>
              )}
              Length Greater then 6
            </div>
          </div>
          <Input
            width="100%"
            type="password"
            label="Confirm Password"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.confirm_password}
          />
          <Input
            width="100%"
            type="number"
            label="Mobile Number"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.mobileNumber}
          />
          <div className="submit">
            <button type="submit" onClick={this.handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
        <div className="create-account unselectable">
          <Link to="/signin" className="login">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.alert.message,
    error: state.alert.error,
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.progress.isLoading,
  };
}

export default connect(mapStateToProps)(SignUp);
