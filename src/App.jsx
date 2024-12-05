import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import movieListData from './data/movielistdata.json';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="movie-list">
              {movieListData.results.map((movie) => (
                <Link to={`/detail/${movie.id}`} key={movie.id}>
                  <MovieCard
                    poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                    rating={movie.vote_average}
                  />
                </Link>
              ))}
            </div>
          }
        />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
