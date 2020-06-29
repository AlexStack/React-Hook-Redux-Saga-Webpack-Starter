import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  listItemRequest: ["keyword", "nextPageToken"],
  listItemSuccess: ["allData", "keyword", "nextPageToken"],
  listItemFailure: ["error"],

  viewItemRequest: ["item"],
  viewItemSuccess: ["backendData", "item"],
  viewItemFailure: ["error"],

  likeItemRequest: ["item"],
  likeItemSuccess: ["backendData", "item"],
  likeItemFailure: ["error"],

  unlikeItemRequest: ["item"],
  unlikeItemSuccess: ["backendData", "item"],
  unlikeItemFailure: ["error"],

  deleteItemRequest: ["id"],
  deleteItemSuccess: ["id", "page"],
  deleteItemFailure: ["error"],

  setFilterKeyRequest: ["value"],
  setFilterKeySuccess: ["value"],
  setFilterKeyFailure: ["error"],

  showLoading: ["loading", "nextPageToken"],
});

export const actionTypes = Types;
export const taskTypes = Types;
export default Creators;
