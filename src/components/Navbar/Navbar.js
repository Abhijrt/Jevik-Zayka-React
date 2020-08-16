import React, { Component } from 'react';
// import Search from '../Search/Search';
import '../../assets/css/Navbar/Navbar.css';

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
        <div className="navbar-logo">Jevik Zayka</div>
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
            <a className="navbar-links" href="/products">
              Products
            </a>
          </li>
          <li>
            <a className="navbar-links" href="/sign-in">
              Sign In
            </a>
          </li>
          <li>
            <a className="navbar-links" href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
