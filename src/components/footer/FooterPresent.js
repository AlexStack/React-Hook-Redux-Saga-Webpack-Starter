import React from "react";
import PropTypes from "prop-types";

const FooterPresent = () => {
  return (
    <div className="container-fluid top-container footer">
      <div className="mt-5 mb-3 p-4 bg-dark text-light text-center">
        Page loaded at {new Date().toLocaleDateString()} -
        {new Date().toLocaleTimeString()}
        <div className="mt-3">
          <a
            href="https://github.com/AlexStack/React-Hook-Redux-Saga-Webpack-Starter#readme"
            target="_blank"
            className="text-light"
            title="React Hooks Redux Saga Webpack Starter"
          >
            <i className="fab fa-github mr-1"></i>Github
          </a>
        </div>
      </div>
    </div>
  );
};

FooterPresent.propTypes = {};
export default FooterPresent;
