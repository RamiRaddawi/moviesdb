import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationPage from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAction } from "../redux/actions/movieActions";
//import { MOVIESAPI } from "../redux/types/moviesTypes";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  const dispatchGetAllMovies = useDispatch();
  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatchGetAllMovies(getAllMoviesAction());
  }, []);
  useEffect(() => {
    setMovies(dataMovies);
    console.log(movies);
  }, [dataMovies, movies]);
  /* useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(MOVIESAPI);
      const result = await response.json();
      console.log(result.results);
      setMovies(result.results);
    };

    fetchData();
  }, []);*/
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h1 className="text-center p-5"> لا يوحد أفلام</h1>
      )}
      {movies.length >= 1 ? <PaginationPage /> : null}
    </Row>
  );
}

export default MoviesList;
