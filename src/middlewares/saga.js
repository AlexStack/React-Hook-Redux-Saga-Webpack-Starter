import { call, put, takeLatest } from "redux-saga/effects";
import sagaApi from "./sagaApiServices";
// import { push } from "connected-react-router";
import allActions, { actionTypes } from "../reduxStores/actions/allActions";
import { myLog } from "../constants/config";

function* listItem(action) {
  yield put(allActions.showLoading(true, action.nextPageToken));

  try {
    const json = yield call(
      sagaApi.listItem,
      action.keyword,
      action.nextPageToken
    );
    console.log("listItem-mylog1", action.type, json);
    yield put(
      allActions.listItemSuccess(
        json.data,
        action.keyword,
        action.nextPageToken
      )
    );
  } catch (e) {
    yield put(allActions.listItemFailure(e.message));
  }
}

function* viewItem(action) {
  try {
    const json = yield call(sagaApi.viewItem, action.item);
    console.log("viewItem-mylog2", action.type, json);
    yield put(allActions.viewItemSuccess(json.data, action.item));
  } catch (e) {
    yield put(allActions.viewItemFailure(e.message));
  }
}

function* likeItem(action) {
  try {
    const json = yield call(sagaApi.likeItem, action.item);
    console.log("likeItem-mylog3", action.type, json);
    yield put(allActions.likeItemSuccess(json.data, action.item));
  } catch (e) {
    yield put(allActions.likeItemFailure(e.message));
  }
}

function* unlikeItem(action) {
  try {
    const json = yield call(sagaApi.unlikeItem, action.item);
    console.log("unlikeItem-mylog3", action.type, json);
    yield put(allActions.unlikeItemSuccess(json.data, action.item));
  } catch (e) {
    yield put(allActions.unlikeItemFailure(e.message));
  }
}

function* deleteItem(action) {
  try {
    const json = yield call(sagaApi.deleteItem, action.id);
    myLog(action, json);
    yield put(allActions.deleteItemSuccess(action.id));
    // yield put(push("/listPage"));
  } catch (e) {
    yield put(allActions.deleteItemFailure(e.message));
  }
}

function* setFilterKey(action) {
  try {
    yield put(allActions.setFilterKeySuccess(action.value));
  } catch (e) {
    yield put(allActions.setFilterKeyFailure(e.message));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.LIST_ITEM_REQUEST, listItem);
  yield takeLatest(actionTypes.VIEW_ITEM_REQUEST, viewItem);
  yield takeLatest(actionTypes.LIKE_ITEM_REQUEST, likeItem);
  yield takeLatest(actionTypes.UNLIKE_ITEM_REQUEST, unlikeItem);
  yield takeLatest(actionTypes.DELETE_ITEM_REQUEST, deleteItem);

  yield takeLatest(actionTypes.SET_FILTER_KEY_REQUEST, setFilterKey);
}

export default rootSaga;
