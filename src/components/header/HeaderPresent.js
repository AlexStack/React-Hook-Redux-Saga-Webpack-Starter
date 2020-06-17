import React from "react";
import { NavLink, Link } from "react-router-dom";

const hideNavbar = (action) => {
  document.getElementById("collapsibleNavbar").classList.remove("show");
};

const HeaderPresent = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <NavLink to="/" className="navbar-brand">
        <i className="fab fa-react mr-1"></i>
        React Examples
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/basic"
              className="nav-link"
              onClick={() => hideNavbar("")}
            >
              Basic React
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/axios"
              className="nav-link"
              onClick={() => hideNavbar("")}
            >
              Axios API
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/redux"
              className="nav-link"
              onClick={() => hideNavbar("")}
            >
              Redux Saga
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderPresent;
