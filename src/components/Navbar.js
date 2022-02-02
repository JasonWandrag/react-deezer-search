import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      <div className="nav">
        <h1 className="navbar-brand">Music Finder</h1>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/" onClick={() => setActive(false)}>
              Home
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/artists" onClick={() => setActive(false)}>
              Search
            </Link>
          </li>
        </ul>
        <button
          className="navbar-btn"
          onClick={() => {
            setActive(!active);
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
