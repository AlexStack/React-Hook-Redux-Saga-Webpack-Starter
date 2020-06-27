import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicApp from "./components/basicApp/BasicApp";
import AxiosApp from "./components/axiosApp/AxiosApp";
import HeaderPresent from "./components/header/HeaderPresent";
import FooterPresent from "./components/footer/FooterPresent";

import ReduxApp from "./components/reduxApp/ReduxApp";

export default class ReactApp extends React.Component {
  render() {
    return (
      <Router>
        <HeaderPresent />
        <div className="container-fluid top-container react-js-main">
          <Switch>
            <Route exact path="/basic" component={BasicApp} />
            <Route path="/axios" component={AxiosApp} />
            <Route path="/redux" component={ReduxApp} />
            <Route component={AxiosApp} />
          </Switch>
        </div>
        <FooterPresent />
      </Router>
    );
  }
}

if (document.getElementById("react-js-basic-app")) {
  ReactDOM.render(<ReactApp />, document.getElementById("react-js-basic-app"));
}
