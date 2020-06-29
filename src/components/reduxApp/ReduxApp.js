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

import ReduxAllVideos from "./ReduxAllVideos";
import ReduxLikedVideos from "./ReduxLikedVideos";
import ReduxPlayedVideos from "./ReduxPlayedVideos";
import ReduxRelatedFiles from "./ReduxRelatedFiles";
import { REDUXPATH } from "../../constants/config";

const sagaMiddleware = createSagaMiddleware();
const { store, persistor } = configureStore(sagaMiddleware, storeHistory);
sagaMiddleware.run(rootSaga);

export default class ReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={storeHistory}>
            {/* <HeaderPresent /> */}
            <Switch>
              <Route
                path={REDUXPATH.PlayedVideos}
                component={ReduxPlayedVideos}
              />
              <Route
                path={REDUXPATH.LikedVideos}
                component={ReduxLikedVideos}
              />
              <Route path={REDUXPATH.SearchVideos} component={ReduxAllVideos} />

              <Route component={ReduxAllVideos} />
            </Switch>

            <ReduxRelatedFiles />
            {/* <FooterPresent /> */}
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
