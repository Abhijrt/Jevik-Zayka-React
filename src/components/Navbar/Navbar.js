import React, { Component } from 'react';
// import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeToken, getToken } from '../../helpers';
import { signOut } from '../../actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClicked: false,
    };
  }

  // handle menu icon click
  handleMenuIconClick = () => {
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
  };

  // handling navbar items button click
  // on small screen when we click a button then menu list should be hidden
  handleButtonClick = () => {
    this.setState({ menuIconClicked: false });
  };

  // loggin out
  handleSignOut = () => {
    console.log('working');
    removeToken();
    this.props.dispatch(signOut());
    console.log(getToken());
  };

  // rendering navbar component
  render() {
    const { isLoggedIn } = this.props.auth;
    const { first_name } = this.props.auth.user;
    return (
      <nav className="navbar-container unselectable">
        <div className="navbar-logo">
          <Link to="/" onClick={this.handleButtonClick}>
            Jaivik Zayka
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleMenuIconClick}>
          <i
            className={
              this.state.menuIconClicked ? 'fa fa-times' : 'fa fa-bars'
            }
            aria-hidden="true"
          ></i>
        </div>
        {/* <Search /> */}
        <ul
          className={
            this.state.menuIconClicked ? 'navbar-menu active' : 'navbar-menu'
          }
        >
          {isLoggedIn && (
            <li>
              <span className="navbar-links user-name">Hi, {first_name}</span>
            </li>
          )}
          <li>
            <Link
              className="navbar-links"
              to="/"
              onClick={this.handleButtonClick}
            >
              Products
            </Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link
                className="navbar-links"
                to="/profile"
                onClick={this.handleButtonClick}
              >
                Profile
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link
                className="navbar-links"
                to="/cart"
                onClick={this.handleButtonClick}
              >
                Cart
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <span
                className="navbar-links"
                onClick={() => {
                  this.handleButtonClick();
                  this.handleSignOut();
                }}
              >
                Sign Out
              </span>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link
                className="navbar-links"
                to="/signin"
                onClick={this.handleButtonClick}
              >
                Sign In
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link
                className="navbar-links"
                to="/signup"
                onClick={this.handleButtonClick}
              >
                Sign Up
              </Link>
            </li>
          )}
          {/* <li>
            <Link
              className="navbar-links"
              to="/contact"
              onClick={this.handleButtonClick}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/about"
              onClick={this.handleButtonClick}
            >
              About Us
            </Link>
          </li> */}
        </ul>
      </nav>
    );
  }
}

// passing store props to component
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
