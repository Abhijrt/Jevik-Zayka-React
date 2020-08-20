import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { path, component: Component, isLoggedIn, isVerified } = this.props;
    if (isLoggedIn === false) {
      return <Redirect to="/signin" />;
    }
    // if (isVerified === false) {
    //   return <Redirect to="/verification" />;
    // }

    return <Route path={path} render={(props) => <Component {...props} />} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isVerified: state.auth.isVerified,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
