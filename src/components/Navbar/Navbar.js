import React, { Component } from 'react';
// import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

  // rendering navbar component
  render() {
    const { isLoggedIn } = this.props.auth;
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
          {/* <li>
            <input></input>
          </li> */}
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
                to="/"
                onClick={this.handleButtonClick}
              >
                Signout
              </Link>
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
          <li>
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
          </li>
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
