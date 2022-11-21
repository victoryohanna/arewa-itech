import React from "react";
import { Link } from "react-router-dom";
import {FaMobile, FaEnvelope} from 'react-icons/fa'; 
import {MdCall} from 'react-icons/md'
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg nav_body">
      <div className="container nav_body">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          {/* <Link className="navbar-brand" href="#">Hidden brand</Link> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item links">
              <Link to="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item links">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item links">
              <Link to="/contact" className="nav-link ">
                Contact
              </Link>
            </li>
          </ul>
         
            <span><FaEnvelope/>info@arewaitech.com  </span>
            <span><MdCall/>+2348131595178</span>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
