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
    // key: "AIzaSyBLd6DZyQNPCudkOueydclFOpSJklOMvnw",
    key: "AIzaSyCSUjqlOe2fK8_2Iw8IXTy9RZ8XOGQ3Mvg",
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

// githubContentsApi for websiteApp example
export const githubRepository = {
  name: "AlexStack/React-Hook-Redux-Saga-Webpack-Starter",
  branch: "master",
  initDirectory: "doc/websiteApp",
  configFile: "0.websiteConfig.json",
  wrongFormatMsg:
    "<div>Error: File source not start with div, please ask the admin to fix it</div>",
  axiosErrorMsg:
    "<div>Get API result failed, please ask the admin to check the console log</div>",
  token1: "0655a262b7ca299897f235",
  token2: "cde0d924c4e4c05cde",
};

export const githubContentsApi = axios.create({
  baseURL:
    "https://api.github.com/repos/" + githubRepository.name + "/contents",
  timeout: 3000,
  responseType: "json",
  params: {
    ref: githubRepository.branch,
  },
  headers: {
    "Content-Type": "application/json",
    Authorization: "token " + githubRepository.token1 + githubRepository.token2,
  },
});

// get github raw file to avoid api rate limit
export const githubRawFile = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/" +
    githubRepository.name +
    "/" +
    githubRepository.branch,
  timeout: 3000,
  responseType: "text",
  headers: {
    "Content-Type": "text/plain",
  },
});

export default packagistApi;
