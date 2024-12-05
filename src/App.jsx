import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

const App = () => {
  const [movies] = useState(movieListData.results); 

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          title={movie.title}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default App;
