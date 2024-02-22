// components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Sandesh Gurung</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/work" className="nav-link">Work</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About Me</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact Me</Link>
                </li>
                <li className="nav-item">
                  <Link to="/skills" className="nav-link">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link to="/resume" className="nav-link">Resume</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
