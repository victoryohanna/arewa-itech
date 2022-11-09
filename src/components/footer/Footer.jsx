import React from "react";
import "./footer.css";
import {FaLinkedin, FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid  footer-container">
      
      <div className="footer-list-wrapper">
        <div className="footer-list brand_logo">
          <h3><Link to="/">Arewa-iTech</Link></h3>
        </div>
        <div className="footer-list">
          <h4>Contact</h4>
          <p>
            <b>Phone Number:</b> +2348131595178
          </p>
          <p>
            <b>Email:</b> info@arewaitech.com
          </p>
          <b>Address:</b>
          <p>
            N0 10 Abc Street off Ahmadu Bello Way, <br /> Opposite Keystone
            Bank, Bauchi state
          </p>
        </div>
        <div className="footer-list">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/" className="links">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about" className="links">About</Link>
            </li>
            <li>
              <Link to="/" className="links">Partners</Link>
            </li>
            <li>
              <Link to="/" className="links">News</Link> 
            </li>
            <li>
              <Link to="/" className="links">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h4>Projects</h4>
          <ul>
            <li>
              <Link to="www.agroconnect.con.ng" className="links">Agroconnect</Link>
            </li>
            <li>
              <Link to="www.disposify.com.ng" className="links">Disposify</Link>
            </li>
            <li>
              <Link to="www.ifuture.com.ng" className="links">iFuture</Link>
            </li>
            {/* <li>
              <Link to="/" className="links">Projects Four</Link>{" "}
            </li> */}
          </ul>
        </div>
        <div className="footer-list">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/" className="links">Privacy</Link>
            </li>
            <li>
              <Link to="/" className="links">Terms and Condition</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social_media-links">
        <div className="faFacebook">
          <Link to="/" className="links">
            <FaFacebook/>
          </Link>
        </div>
        <div className="faTwitter">
          <Link to="/" className="links">
            <FaTwitter />
          </Link>
        </div>
        <div className="faLinkedIn">
          <Link to="/" className="links">
            <FaLinkedin />
          </Link>
        </div>
        <div className="faInstagram">
          <Link to="/" className="links">
            <FaInstagram />
          </Link> 
        </div>
      </div>
      <div className="copyrihgt-section">
        <span>&copy; 2022 Arewa-iTech Limited</span>
      </div>
    </div>
  );
};

export default Footer;
