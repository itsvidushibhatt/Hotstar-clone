import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "9fec920fe7ef2ed28e30d23b13342bb4";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=9fec920fe7ef2ed28e30d23b13342bb4";

//https://api.themoviedb.org/3/movie/popular?api_key=9fec920fe7ef2ed28e30d23b13342bb4

const getPopularVideos = axios.get(
  movieBaseUrl + "/movie/popular?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getPopularVideos,
  getMovieByGenreId,
};
