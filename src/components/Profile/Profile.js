import React, { Component } from 'react';
import { connect } from 'react-redux';

// rendering profile component
class Profile extends Component {
  render() {
    const { email, first_name, last_name, mobile_number } = this.props.user;
    return (
      <div>
        <div>{first_name}</div>
        <div>{last_name}</div>
        <div>{email}</div>
        <div>{mobile_number}</div>
      </div>
    );
  }
}

// passing props from store to component
function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(mapStateToProps)(Profile);
