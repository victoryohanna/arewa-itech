import React from "react";
import { Link } from "react-router-dom";
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
