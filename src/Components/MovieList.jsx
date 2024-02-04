import React from "react";
import GlobalApi from "../Services/GlobalApi";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((response) => {
      // console.log(response.data.results);
      setMovieList(response.data.results);
    });
  };

  return (
    <div className="flex pb-4 mb:pb-6 gap-3 md:gap-6 md:pt-7 pt-5 overflow-x-auto scrollbar-hide scroll-smooth">
      {movieList.map((item, index) => (
        <>
          {index_ % 3 == 0 ? (
            <HrMovieCard movie={item} />
          ) : (
            <MovieCard  movie={item}/>
          )}
        </>
      ))}
    </div>
  );
}

export default MovieList
