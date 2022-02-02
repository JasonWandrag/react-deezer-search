import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav">
        <h1 className="navbar-brand">Melodic.ly</h1>
        <ul className={`navbar-links ${active ? "active" : ""}`}>
          <li className="navbar-link">
            {/* Using NAVLINK to have access to Active Styling Classes */}
            <NavLink
              activeClassName="nav-item-active"
              to="/"
              exact
              onClick={() => setActive(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-link">
            <NavLink
              activeClassName="nav-item-active"
              to="/artists"
              onClick={() => setActive(false)}
            >
              Search
            </NavLink>
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
