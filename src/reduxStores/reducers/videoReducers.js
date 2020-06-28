import { createReducer } from "reduxsauce";
import { actionTypes } from "../actions/allActions";

// the initial state of this reducer
export const INITIAL_STATE = {
  allItems: [],
  likedItems: [],
  viewedItems: [],
  keywords: [],
  // errorMsg: null,
  // formStatus: null, // Submitting, Success, Failed
  // applyTask: null,
  // filterKey: "all",
};

const listItems = (state = INITIAL_STATE, action) => {
  return { ...state, allItems: action.allData.items };
};

const likeItem = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    ...{ likedItems: [...state.likedItems, action.item] },
  };
  // return { ...state, likedItems: action.item };
};

const unlikeItem = (state = INITIAL_STATE, action) => {
  const newLikedItems = state.likedItems.filter(
    (t) => t.id.videoId !== action.item.id.videoId
  );
  return {
    ...state,
    likedItems: newLikedItems,
  };
};

const viewItem = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    ...{ viewedItems: [...state.viewedItems, action.item] },
  };
};

const deleteItem = (state = INITIAL_STATE, action) => {
  // console.log(action, action, action);
  return {
    ...state,
    items: state.items.filter((item) => item.id !== action.id),
  };
};

const setFilterKey = (state = INITIAL_STATE, action) => {
  return { ...state, filterKey: action.value };
};

// map our action types to our reducer functions
export const HANDLERS = {
  [actionTypes.LIST_ITEM_SUCCESS]: listItems,
  [actionTypes.VIEW_ITEM_SUCCESS]: viewItem,
  [actionTypes.LIKE_ITEM_SUCCESS]: likeItem,
  [actionTypes.UNLIKE_ITEM_SUCCESS]: unlikeItem,
  [actionTypes.DELETE_ITEM_SUCCESS]: deleteItem,
  [actionTypes.SET_FILTER_KEY_SUCCESS]: setFilterKey,
  // [actionTypes.APPLY_TASK_GROUP_FAILURE]: applyTaskFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);
