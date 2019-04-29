import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key : "c687c3a1bd75b9cce10df38846b9118d",
    language: "en-US"
  }
})

api.get("/tv/popular");

export default api;