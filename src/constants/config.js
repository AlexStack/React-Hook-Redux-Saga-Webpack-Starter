/* eslint-disable no-console */

export const REDUXPATH = {
  LikedVideos: "/LikedVideos2",
  PlayedVideos: "/PlayedVideos5",
  SearchVideos: "/SearchVideos3",
};
export const myLog = (variable) => {
  console.log(variable);
};

export const lastPath = (prefix = "/") =>
  prefix + document.location.pathname.split("/").slice(-1)[0];
