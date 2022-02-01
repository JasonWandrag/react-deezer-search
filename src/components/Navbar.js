import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Music Finder</h1>
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="/artists">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
