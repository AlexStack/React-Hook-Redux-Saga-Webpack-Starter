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
    // key: "AIzaSyBLd6DZyQNPCudkOueydclFOpSJklOMvnw",
    key: "AIzaSyCSUjqlOe2fK8_2Iw8IXTy9RZ8XOGQ3Mvg",
    maxResults: 20,
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

// details: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBLd6DZyQNPCudkOueydclFOpSJklOMvnw&part=snippet,statistics&fields=items
// search: https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=AIzaSyBLd6DZyQNPCudkOueydclFOpSJklOMvnw

export default packagistApi;
