import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

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
      <div className="signin-container">
        <div className="heading unselectable">Login</div>
        <form ref={this.state.formRef}>
          <Input
            width="90%"
            type="text"
            label="Email"
            required={true}
            handleOnChange={this.handleOnChange}
            value={this.state.email}
          />
          <div className="submit">
            <button type="submit" disabled={isLoading}>
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
  return {
    isLoading: state.auth.isLoading,
  };
}

export default connect(mapStateToProps)(ForgetPassword);
