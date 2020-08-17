import React, { Component } from 'react';
import { Input } from '../../components';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <div className="signin-container">
        <div className="heading unselectable">Login</div>
        <form>
          <Input width="90%" type="text" label="Username" required={true} />
          <Input width="90%" type="password" label="Password" required={true} />
          <div className="submit">
            <button type="submit">Sign In</button>
          </div>
          <Link to="/signup" className="create-account">
            Create An Account
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
