import React, { Component, createRef } from 'react';
import { Input } from '../../components';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formRef: createRef(),
    };
  }

  handleOnChange = (label, value) => {
    if (label === 'Username') {
      this.setState({ username: value });
    }
    if (label === 'Password') {
      this.setState({ password: value });
    }
  };

  handleSignIn = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0) {
      return;
    }
    this.setState({ username: '', password: '' });
    this.state.formRef.current.reset();
  };

  render() {
    return (
      <div className="signin-container">
        <div className="heading unselectable">Login</div>
        <form ref={this.state.formRef}>
          <Input
            width="90%"
            type="text"
            label="Username"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.username}
          />
          <Input
            width="90%"
            type="password"
            label="Password"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.password}
          />
          <div className="submit">
            <button type="submit" onClick={this.handleSignIn}>
              Sign In
            </button>
          </div>
          <div className="create-account unselectable">
            <Link to="/signup">Create An Account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
