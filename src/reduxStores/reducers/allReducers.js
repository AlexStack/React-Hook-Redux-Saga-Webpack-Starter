// @flow

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import videoReducers from "./videoReducers";

export default (storeHistory) =>
  combineReducers({
    router: connectRouter(storeHistory),
    videos: videoReducers,
  });
