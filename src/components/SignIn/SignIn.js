import React, { Component, createRef } from 'react';
import { Input } from '../../components';
import { connect } from 'react-redux';
import { signIn, setErrorToNull } from '../../actions';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formRef: createRef(),
    };
  }

  componentDidUpdate() {
    const { error, dispatch } = this.props;
    if (error != null) {
      swal({
        title: 'Login Error',
        text: error,
        icon: 'warning',
        button: 'Ok',
      });
      dispatch(setErrorToNull());
    }
  }

  handleOnChange = (label, value) => {
    if (label === 'Username') {
      this.setState({ username: value });
    }
    if (label === 'Password') {
      this.setState({ password: value });
    }
  };

  swalMessageForFormInputControl = (field) => {
    swal({
      title: 'Missing Field',
      text: `Please Enter ${field}`,
      icon: 'warning',
      button: 'Ok',
    });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log('details', username, password);
    if (username.length === 0) {
      this.swalMessageForFormInputControl('Username');
      return;
    } else if (password.length === 0) {
      this.swalMessageForFormInputControl('Password');
      return;
    }
    this.props.dispatch(signIn(username, password));
    this.setState({ username: '', password: '' });
    this.state.formRef.current.reset();
  };

  render() {
    const { isLoading } = this.props;
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
            <button
              type="submit"
              onClick={this.handleSignIn}
              disabled={isLoading}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="create-account unselectable">
          <Link to="/signup">Create An Account</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isLoading: state.progress.isLoading, error: state.auth.error };
}

export default connect(mapStateToProps)(SignIn);
