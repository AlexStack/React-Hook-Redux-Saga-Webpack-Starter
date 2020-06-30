import { createReducer } from "reduxsauce";
import { actionTypes } from "../actions/allActions";
import { REDUXPATH, lastPath } from "../../constants/config";

// the initial state of this reducer
export const INITIAL_STATE = {
  allItems: [],
  likedItems: [],
  viewedItems: [],
  keywords: ["Just for laugh", "Cat", "Dog", "Mac Pro", "SpaceX", "Covid-19"],
  extraInfo: {
    etag: null,
    loading: false,
    nextPageToken: null,
    resultsPerPage: 5,
    totalResults: null,
    errorMsg: null,
  },
};

const listItems = (state = INITIAL_STATE, action) => {
  const allItems = action.nextPageToken
    ? [...state.allItems, ...action.allData.items]
    : action.allData.items;
  return {
    ...state,
    ...{
      allItems: allItems,
      keywords: [
        action.keyword,
        ...state.keywords.filter((t) => t !== action.keyword),
      ],
      extraInfo: {
        loading: false,
        nextPageToken: action.allData.nextPageToken,
        resultsPerPage: action.allData.pageInfo.resultsPerPage,
        totalResults: action.allData.pageInfo.totalResults,
        errorMsg: null,
        etag: action.allData.etag,
      },
    },
  };
};

const showLoading = (state = INITIAL_STATE, action) => {
  const allItems = action.nextPageToken ? state.allItems : [];
  const totalResults = action.nextPageToken
    ? state.extraInfo.totalResults
    : null;
  return {
    ...state,
    ...{
      extraInfo: {
        loading: action.loading,
        totalResults: totalResults,
      },
      allItems: allItems,
    },
  };
};

const listItemFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    ...{
      extraInfo: {
        loading: false,
        errorMsg: "Something wrong with the youtube API response",
      },
    },
  };
};

const likeItem = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    ...{ likedItems: [action.item, ...state.likedItems] },
  };
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
  if (lastPath() == REDUXPATH.PlayedVideos) {
    return state; // nothing should change when you are on the PlayedVideos page
  }

  // remove the duplicate videos and put the latest played video on the top
  return {
    ...state,
    ...{
      viewedItems: [
        action.item,
        ...state.viewedItems.filter(
          (item) => item.id.videoId !== action.item.id.videoId
        ),
      ],
    },
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
  [actionTypes.SHOW_LOADING]: showLoading,
};

export default createReducer(INITIAL_STATE, HANDLERS);
