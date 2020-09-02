import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '../../components';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      formRef: createRef(),
    };
  }

  handleOnChange = (label, value) => {
    if (label === 'Email') {
      this.setState({ email: value });
    }
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div className="signin-container forget-password-container">
        <div className="heading unselectable">Forget Password</div>
        <form ref={this.state.formRef}>
          <Input
            width="100%"
            type="text"
            label="Email"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.email}
          />
          <div className="submit">
            <button type="submit" disabled={isLoading}>
              Send Mail
            </button>
          </div>
        </form>
        <div className="create-account unselectable login">
          <Link to="/signin">Login</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
  };
}

export default connect(mapStateToProps)(ForgetPassword);
