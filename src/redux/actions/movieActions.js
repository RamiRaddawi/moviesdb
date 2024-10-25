import axios from "axios";
import { AllMOVIES, MOVIESAPI } from "../types/moviesTypes";

export const getAllMoviesAction = () => {
  return (dispatch) => {
    axios.get(MOVIESAPI).then((res) => {
      console.log(res.data.results);
      dispatch({
        type: AllMOVIES,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    });
  };
};

export const getMovieSearch = (word) => {
  return (dispatch) => {
    const res = axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&l&query=" +
        word +
        "&language=ar"
    );
    console.log(res);
    res.then((data) => {
      console.log(data.data);
      dispatch({
        type: AllMOVIES,
        data: data.data.results,
        pages: data.data.total_pages,
      });
    });
  };
};
export const getPage = (page) => {
  return (dispatch) => {
    const res = axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=" +
        page
    );
    //console.log(res);
    res.then((data) => {
      console.log(data.data);
      dispatch({
        type: AllMOVIES,
        data: data.data.results,
        pages: data.data.total_pages,
      });
    });
  };
};
