import React, { Component } from 'react';
import '../../assets/css/Footer/Footer.css';
import { Link } from 'react-router-dom';
import '../../assets/css/common.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container unselectable">
        <div className="social-icon-contaier">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <div className="separation-border"></div>
        <div className="navigation-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
