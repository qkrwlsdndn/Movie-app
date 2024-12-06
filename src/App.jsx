import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import movieListData from './data/movieListData.json';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 메인 페이지 */}
          <Route
            index
            element={
              <div className="movie-list">
                {movieListData.results.map((movie) => (
                  <Link to="/detail/" key={movie.id}>
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
          {/* 상세 페이지 */}
          <Route path="detail/" element={<MovieDetail />} />
          {/* 로그인 페이지 */}
          <Route path="login" element={<div>로그인 페이지</div>} />
          {/* 회원가입 페이지 */}
          <Route path="signup" element={<div>회원가입 페이지</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
