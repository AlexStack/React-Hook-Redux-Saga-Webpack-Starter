import React from "react";
import ReactDOM from "react-dom";
import BasicApp from "./components/basicApp/BasicApp";

export default class BasicReactApp extends React.Component {
  render() {
    return <BasicApp />;
  }
}

export class ReduxReactApp extends React.Component {
  render() {
    return (
      <div className="text-center text-info">
        This is a simple react redux app....
      </div>
    );
  }
}

if (document.getElementById("react-js-basic-app")) {
  ReactDOM.render(
    <BasicReactApp />,
    document.getElementById("react-js-basic-app")
  );
}

if (document.getElementById("react-js-redux-app")) {
  ReactDOM.render(
    <ReduxReactApp />,
    document.getElementById("react-js-redux-app")
  );
}
