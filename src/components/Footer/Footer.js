import React, { Component } from 'react';
import '../../assets/css/Footer/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="social-icon-contaier">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <div className="separation-border"></div>
        <div className="navigation-list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
