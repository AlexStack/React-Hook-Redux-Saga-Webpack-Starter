import { youtubeApi, backendApi } from "../constants/axiosApi";

const listItem = (keyword) => {
  return youtubeApi.get(`/search`, {
    params: {
      part: "snippet",
      order: "viewCount",
      q: keyword,
      type: "video",
      videoDefinition: "high",
      maxResults: 16,
    },
  });
};

const viewItem = (item) => {
  return true;
};

const likeItem = (item) => {
  return backendApi.post(`/videos`, {
    method: "POST",
    params: {
      videoId: item.id.videoId,
      userId: 1,
    },
  });
};

const unlikeItem = (item) => {
  return backendApi.delete(`/videos/${item.id.videoId}`, {
    method: "DELETE",
    params: {
      videoId: item.id.videoId,
      userId: 1,
    },
  });
};

const deleteItem = (id) => {
  return backendApi.delete(`/videos/${id}`, {
    method: "DELETE",
    params: {
      videoId: id,
      userId: 1,
    },
  });
};

const ApiMethods = {
  listItem,
  viewItem,
  likeItem,
  unlikeItem,
  deleteItem,
};

export default ApiMethods;
