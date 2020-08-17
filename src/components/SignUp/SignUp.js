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
      formRef: createRef(),
    };
  }

  handleOnChange = (label, value) => {
    if (label === 'Email') {
      this.setState({ email: value });
    } else if (label === 'Name') {
      this.setState({ name: value });
    } else if (label === 'Password') {
      this.setState({ password: value });
    } else if (label === 'Confirm Password') {
      this.setState({ confirm_password: value });
    } else if (label === 'Mobile Number') {
      this.setState({ phone: value });
    }
  };

  swalMessage = (field) => {
    swal({
      title: 'Missing Field!',
      text: `Please Enter ${field}`,
      icon: 'warning',
      button: 'Ok',
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const { email, name, password, confirm_password, phone } = this.state;
    if (email.length === 0) {
      this.swalMessage('Email');
      return;
    } else if (name.length === 0) {
      this.swalMessage('Name');
      return;
    } else if (password.length === 0) {
      this.swalMessage('Password');
      return;
    } else if (confirm_password !== password) {
      if (confirm_password.length === 0) {
        this.swalMessage('Confrim Password');
      } else {
        this.swalMessage('Right Passwords');
      }
      return;
    } else if (phone.length === 0) {
      this.swalMessage('Mobile Number');
      return;
    }
    this.setState({
      email: '',
      name: '',
      password: '',
      confirm_password: '',
      phone: '',
    });
    this.state.formRef.current.reset();
  };

  render() {
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
          <div className="create-account unselectable">
            <Link to="/signin">Login</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
