import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const param = useParams();
  console.log(param);
  const [movie, setMovies] = useState([]);
  //get  movie details by axios
  const getMovieDetails = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        param.id +
        "?api_key=52ef927bbeb21980cd91386a29403c78&l&language=ar"
    );
    console.log(res.data);
    setMovies(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Row className="justify-centent-center">
        <Col md="6" sm="6" xs="6">
          <div className="card-details  align-items-center">
            <img
              className="img-movie w-15"
              style={{ width: "40%", borderRadius: "15px" }}
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt="ascad"
            />
          </div>
        </Col>
        <Col md="6" sm="6" xs="6" lg="6">
          <div className="  justify-content-center text-center mx-auto">
            <p
              className="card-text-details border-bottom"
              style={{ fontSize: "2rem" }}
            >
              اسم الفيلم :{movie.title}
            </p>
            <p
              className="card-text-details border-bottom"
              style={{ fontSize: "1.2rem" }}
            >
              تاريخ الفيلم :{movie.release_date}
            </p>

            <p
              className="card-text-details border-bottom"
              style={{ fontSize: "1.2rem" }}
            >
              عدد المقيمين :{movie.vote_count}
            </p>
            <p
              className="card-text-details border-bottom"
              style={{ fontSize: "1.2rem" }}
            >
              التقييم :{movie.vote_average}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end px-2" style={{ fontSize: "2rem" }}>
              <p className="card-text-title border-bottom"> القصة</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story"> {movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عودة للرئيسية
            </button>
          </Link>
          {movie.homepage === "" ? (
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهدة الفيلم
            </button>
          ) : (
            <a href={movie.homepage}>
              <button
                style={{ backgroundColor: "#b45b35", border: "none" }}
                className="btn btn-primary"
              >
                مشاهدة الفيلم
              </button>
            </a>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
