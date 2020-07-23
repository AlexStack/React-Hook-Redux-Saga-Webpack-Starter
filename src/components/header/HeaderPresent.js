import React from "react";
import { NavLink, Link } from "react-router-dom";
import { REACTPATH, REDUXPATH } from "../../constants/config";

const hideNavbar = (action) => {
  document.getElementById("collapsibleNavbar").classList.remove("show");
};

const HeaderPresent = () => {
  return (
    <div className="container-fluid top-container header">
      <h1 className="text-center text-success">ReactJS Starter</h1>
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
                to={REACTPATH.Basic}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                Basic React
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Axios}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                Axios API
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={REACTPATH.Redux + REDUXPATH.SearchVideos}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                Redux Saga
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={REACTPATH.BasicHooks}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                Basic Hooks
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={REACTPATH.Website}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                Document
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPresent;
