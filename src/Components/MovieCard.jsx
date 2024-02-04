import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-150 ease-in cursor-pointer
       hover:border-[3px] hover:border-white"
      />
    </>
  );
}

export default MovieCard;
