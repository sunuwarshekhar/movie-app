import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieListing.scss"
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";
  
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie) => (
        <MovieCard key={movie.imdbID} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show) => (
        <MovieCard key={show.imdbID} data={show} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
