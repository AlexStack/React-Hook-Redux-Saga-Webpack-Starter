import React from "react";
import PropTypes from "prop-types";

const FooterPresent = () => {
  return (
    <div className="mt-5 mb-5 pt-5 pb-5 pl-4 bg-dark text-light">
      Time now : {new Date().toLocaleDateString()} -
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
  );
};

FooterPresent.propTypes = {};
export default FooterPresent;
