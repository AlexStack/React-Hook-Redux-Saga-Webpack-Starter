import axios from "axios";

// for axiosApp example
export const packagistApi = axios.create({
  baseURL: "https://packagist.org",
  timeout: 3000,
  responseType: "json",
  // default params may not working, details: https://github.com/axios/axios/issues/2190
  params: {
    per_page: 5,
  },
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "AlexStack react starter example",
    Authorization: "Client Id change-here-if-authorization-needed",
  },
});

// for reduxApp example
export const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 3000,
  responseType: "json",
  params: {
    // replace below key to your own google-youtube-api-key for more quotas
    key: "AIzaSyBLd6DZyQNPCudkOueydclFOpSJklOMvnw",
    // key: "AIzaSyCSUjqlOe2fK8_2Iw8IXTy9RZ8XOGQ3Mvg",
    maxResults: 10,
  },
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "AlexStack react starter example",
    Authorization: "Client Id change-here-if-authorization-needed",
  },
});

// FAKE backend api for create/update/delete action of a particular user
export const backendApi = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
  responseType: "json",
  params: {
    from: "AlexStack react starter",
  },
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "AlexStack react starter example",
    Authorization: "Client Id change-here-if-authorization-needed",
  },
});

// for websiteApp example
export const githubContentsApi = axios.create({
  baseURL:
    "https://api.github.com/repos/AlexStack/React-Hook-Redux-Saga-Webpack-Starter/contents",
  timeout: 3000,
  responseType: "json",
  params: {
    ref: "master",
  },
  headers: {
    "Content-Type": "application/json",
    Authorization: "token 176caff7c912f22ecbc0910aab2372f236e596db",
  },
});

export default packagistApi;
