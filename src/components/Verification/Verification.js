import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Verification extends Component {
  render() {
    const { isLoggedIn, isVerified } = this.props;
    if (isLoggedIn === false) {
      return <Redirect to="/signin" />;
    }
    if (isVerified === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        Verification
        <button>Click here to Send Verification mail</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isVerified: state.auth.isVerified,
  };
}

export default connect(mapStateToProps)(Verification);
