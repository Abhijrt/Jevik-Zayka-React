import React, { Component, createRef } from 'react';
import { Input } from '../../components';
import { connect } from 'react-redux';
import { signIn, clearMessage, clearError } from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import {
  missingFieldAlert,
  errorMessageAlert,
  successMessageAlert,
} from '../../helpers';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formRef: createRef(),
    };
  }

  componentDidMount() {
    this.setState({ username: '', password: '' });
  }
  componentDidUpdate() {
    const { error, dispatch, message } = this.props;
    if (error != null) {
      errorMessageAlert('Error', error.detail);
      dispatch(clearError());
    }
    if (message != null) {
      successMessageAlert(message.title, 'Please Login to Continue');
      dispatch(clearMessage());
    }
  }

  handleOnChange = (label, value) => {
    if (label === 'Email or Mobile Number') {
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
      missingFieldAlert('Missing Field', 'Email or Mobile Number');
      return;
    } else if (password.length === 0) {
      missingFieldAlert('Missing Field', 'Password');
      return;
    }
    this.props.dispatch(signIn(username, password));
    // this.state.formRef.current.reset();
  };

  render() {
    const { isLoading, isLoggedIn } = this.props;
    if (isLoggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signin-container">
        <div className="heading unselectable">Login</div>
        <form ref={this.state.formRef}>
          <Input
            width="90%"
            type="text"
            label="Email or Mobile Number"
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
        <div className="forget-password unselectable">
          <Link to="/forgetpassword">Forget Password</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.progress.isLoading,
    error: state.alert.error,
    message: state.alert.message,
    isLoggedIn: state.auth.isLoggedIn,
  };
}

export default connect(mapStateToProps)(SignIn);
