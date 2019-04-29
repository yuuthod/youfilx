import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key : "c687c3a1bd75b9cce10df38846b9118d",
    language: "en-US"
  }
});

//

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"), 
  topRated: () => api.get("movie/top_rated"),
  movieDetail: id => 
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: (term) => 
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today "),
  tvDetail: id => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: (term) => 
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};