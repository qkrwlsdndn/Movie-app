import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieDetail.css";


const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovieDetail = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.status_message || "Failed to fetch movie details");
      }

      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetail(id);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>평점:</strong> {movie.vote_average} ({movie.vote_count}명 투표)</p>
          <p>
            <strong>장르:</strong> {movie.genres?.map((genre) => genre.name).join(", ") || "없음"}
          </p>
          <p><strong>줄거리:</strong> {movie.overview || "줄거리가 없습니다."}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
