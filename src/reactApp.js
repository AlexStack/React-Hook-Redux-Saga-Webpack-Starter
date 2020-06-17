import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicApp from "./components/basicApp/BasicApp";
import AxiosApp from "./components/axiosApp/AxiosApp";
import HeaderPresent from "./components/header/HeaderPresent";
import FooterPresent from "./components/footer/FooterPresent";

export default class ReactApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid top-container">
          <HeaderPresent />
          <Switch>
            <Route exact path="/basic" component={BasicApp} />
            <Route path="/axios" component={AxiosApp} />
            <Route component={AxiosApp} />
          </Switch>
          <FooterPresent />
        </div>
      </Router>
    );
  }
}

if (document.getElementById("react-js-basic-app")) {
  ReactDOM.render(<ReactApp />, document.getElementById("react-js-basic-app"));
}

//  uncomment below for React without router
// export default class BasicReactApp extends React.Component {
//   render() {
//     return <BasicApp />;
//   }
// }

// export class AxiosApiApp extends React.Component {
//   render() {
//     return <AxiosApp />;
//   }
// }

// if (document.getElementById("react-js-basic-app")) {
//   ReactDOM.render(
//     <BasicReactApp />,
//     document.getElementById("react-js-basic-app")
//   );
// }

// if (document.getElementById("react-js-axios-app")) {
//   ReactDOM.render(
//     <AxiosApiApp />,
//     document.getElementById("react-js-axios-app")
//   );
// }
