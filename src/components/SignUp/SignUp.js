import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import swal from 'sweetalert';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirm_password: '',
      phone: '',
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
    } else if (label === 'Name') {
      this.setState({ name: value });
    } else if (label === 'Password') {
      this.setState({
        password: value,
        validation_status: this.checkValidation(value),
      });
    } else if (label === 'Confirm Password') {
      this.setState({ confirm_password: value });
    } else if (label === 'Mobile Number') {
      this.setState({ phone: value });
    }
  };

  // showing alert on blank field in form
  swalMessage = (title, field) => {
    swal({
      title: title,
      text: `Please Enter ${field}`,
      icon: 'warning',
      button: 'Ok',
    });
  };

  // handling form submission for sign up button
  handleSignUp = (e) => {
    e.preventDefault();
    const { email, name, password, confirm_password, phone } = this.state;
    if (email.length === 0) {
      this.swalMessage('Missing Field', 'Email');
      return;
    } else if (name.length === 0) {
      this.swalMessage('Missing Field', 'Name');
      return;
    } else if (password.length === 0) {
      this.swalMessage('Missing Field', 'Password');
      return;
    } else if (confirm_password !== password) {
      if (confirm_password.length === 0) {
        this.swalMessage('Missing Field', 'Confrim Password');
      } else {
        this.swalMessage('Invalid Password', 'Right Passwords');
      }
      return;
    } else if (phone.length === 0) {
      this.swalMessage('Missing Field', 'Mobile Number');
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
      this.swalMessage('Invalid Password', 'Valid Password');
    }

    this.setState({
      email: '',
      name: '',
      password: '',
      confirm_password: '',
      phone: '',
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
    return (
      <div className="signin-container sign-up-container">
        <div className="heading unselectable">Register</div>
        <form ref={this.state.formRef}>
          <Input
            width="90%"
            type="email"
            label="Email"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.email}
          />
          <Input
            width="90%"
            type="text"
            label="Name"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.Name}
          />
          <Input
            width="90%"
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
                <i class="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-times" aria-hidden="true"></i>
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
                <i class="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-times" aria-hidden="true"></i>
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
                <i class="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-times" aria-hidden="true"></i>
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
                <i class="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-times" aria-hidden="true"></i>
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
                <i class="fa fa-check" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-times" aria-hidden="true"></i>
              )}
              Length Greater then 6
            </div>
          </div>
          <Input
            width="90%"
            type="password"
            label="Confirm Password"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.confirm_password}
          />
          <Input
            width="90%"
            type="number"
            label="Mobile Number"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.Phone}
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

export default SignUp;
