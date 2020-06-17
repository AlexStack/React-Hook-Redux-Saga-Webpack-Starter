import axios from "axios";

export default axios.create({
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
