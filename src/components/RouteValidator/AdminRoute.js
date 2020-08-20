import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class AdminRoute extends Component {
  render() {
    const {
      path,
      component: Component,
      isLoggedIn,
      isVerified,
      isAdmin,
    } = this.props;
    if (isLoggedIn === false) {
      return <Redirect to="/signin" />;
    }
    if (isVerified === false) {
      return <Redirect to="/verification" />;
    }

    if (isAdmin === false) {
      return <Redirect to="/" />;
    }
    return <Route path={path} render={(props) => <Component {...props} />} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isVerified: state.auth.isVerified,
    isAdmin: state.auth.isAdmin,
  };
}

export default connect(mapStateToProps)(AdminRoute);
