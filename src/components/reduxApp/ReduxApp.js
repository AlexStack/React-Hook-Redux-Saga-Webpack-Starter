/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";

import configureStore, {
  history as storeHistory,
} from "../../reduxStores/configureStore";
import rootSaga from "../../middlewares/saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const { store, persistor } = configureStore(sagaMiddleware, storeHistory);
sagaMiddleware.run(rootSaga);

import ReduxVideos from "./ReduxVideos";
import ReduxLikedVideos from "./ReduxLikedVideos";
import ReduxPlayedVideos from "./ReduxPlayedVideos";
import ReduxRelatedFiles from "./ReduxRelatedFiles";

export default class ReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={storeHistory}>
            {/* <HeaderPresent /> */}
            <Switch>
              <Route path="/PlayedVideos" component={ReduxPlayedVideos} />
              <Route path="/LikedVideos" component={ReduxLikedVideos} />
              <Route path="/SearchVideos" component={ReduxVideos} />

              <Route component={ReduxVideos} />
            </Switch>

            <ReduxRelatedFiles />
            {/* <FooterPresent /> */}
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
