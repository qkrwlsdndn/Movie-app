import React from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ poster, title, rating }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={`${title} Poster`} className="movie-card-poster" />
      <div className="movie-card-info">
        <h3>{title}</h3>
        <p>평점: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
