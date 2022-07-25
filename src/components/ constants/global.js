export const imgUrl = "https://image.tmdb.org/t/p/w500/";
export const fakeImg = "http://via.placeholder.com/1080x1580/";

export const apiKey = "api_key=" + process.env.REACT_APP_API_KEY;
export const baseUrl = "https://api.themoviedb.org/3";
export const apiUrl =
  baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
export const searchUrl = baseUrl + "/search/movie?" + apiKey + "&query=";
