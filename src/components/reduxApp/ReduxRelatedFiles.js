/* eslint-disable no-undef */
import React, { Component } from "react";
import RelatedFiles from "../footer/RelatedFiles";

const ReduxRelatedFiles = () => (
  <div className="text-center mt-5 pt-5">
    <RelatedFiles>
      <li className="list-group-item">
        src/components/reduxApp/ReduxApp.js --- React-Redux main entry point
      </li>
      <li className="list-group-item">
        src/components/reduxApp/*.js --- React Components
      </li>
      <li className="list-group-item">
        src/reduxStores/*.js --- Redux configuration & actions & reducers
      </li>
      <li className="list-group-item">
        src/middlewares/*.js --- Redux middlewares: saga, api services
      </li>
    </RelatedFiles>
  </div>
);
export default ReduxRelatedFiles;
