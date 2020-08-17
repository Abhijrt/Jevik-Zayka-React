import React, { Component } from 'react';
// import Search from '../Search/Search';
import '../../assets/css/Navbar/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClicked: false,
    };
  }

  handleMenuIconClick = () => {
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
  };

  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Jaivik Zayka</Link>
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
            <Link className="navbar-links" to="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="navbar-links" to="/signin">
              Sign In
            </Link>
          </li>
          <li>
            <Link className="navbar-links" to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="navbar-links" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="navbar-links" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
