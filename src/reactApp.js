import React from "react";
import ReactDOM from "react-dom";
import BasicApp from "./components/basicApp/BasicApp";
import AxiosApp from "./components/axiosApp/AxiosApp";

export default class BasicReactApp extends React.Component {
  render() {
    return <BasicApp />;
  }
}

export class AxiosApiApp extends React.Component {
  render() {
    return <AxiosApp />;
  }
}

if (document.getElementById("react-js-basic-app")) {
  ReactDOM.render(
    <BasicReactApp />,
    document.getElementById("react-js-basic-app")
  );
}

if (document.getElementById("react-js-axios-app")) {
  ReactDOM.render(
    <AxiosApiApp />,
    document.getElementById("react-js-axios-app")
  );
}

