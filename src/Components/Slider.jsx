import React from "react";
import GlobalApi from "../Services/GlobalApi";
import { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const getPopularMovies = () => {
    GlobalApi.getPopularVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  const sliderRight = (value) => {
    value.scrollLeft += screenWidth - 120;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 120;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white  text-[70px] absolute
        mx-8 mt-[215px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[70px] absolute
        mx-8 mt-[215px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
    scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[450px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
