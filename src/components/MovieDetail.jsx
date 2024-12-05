import React from 'react';
import { useParams } from 'react-router-dom';
import movieListData from '../data/movielistdata.json';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieListData.results.find((m) => m.id.toString() === id);

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="movie-detail">

        <div className="info">
          <h1>{movie.title}</h1>
          <p>{movie.tagline}</p>
          <p>
            <strong>평점:</strong> {movie.vote_average} ({movie.vote_count}명 투표)
          </p>
          <p>
            <strong>장르:</strong>{' '}
            {movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : '정보 없음'}
          </p>
          <p>
            <strong>개봉일:</strong> {movie.release_date}
          </p>
          <p>{movie.overview}</p>
        </div>
      </div>
  );
};

export default MovieDetail;
