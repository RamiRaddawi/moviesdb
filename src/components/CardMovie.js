import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardMovie({ movie }) {
  console.log(movie);
  return (
    <Col xs="3" sm="3" md="3" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            className="card_image"
            alt="habib"
          />
          <div className="card_overlay">
            <div className="overlay_text text-center w-100 p-2">
              <p> اسم الفيلم : {movie.original_title}</p>
              <p>تاريخ الاصدار : {movie.release_date}</p>
              <p>عدد المقيمين: {movie.vote_count}</p>
              <p>التقييم: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default CardMovie;
