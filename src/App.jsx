import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.status_message || "Failed to fetch movies");
      }

      const filteredMovies = data.results.filter((movie) => !movie.adult);
      setMovies(filteredMovies);
    } catch (error) {
      console.error("에러뜸", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="movie-list">
                {movies.map((movie) => (
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
          <Route path="detail/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
