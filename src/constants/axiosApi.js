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

export default packagistApi;
