import React from 'react';
import MoviesListStyled from './MoviesListStyled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <MoviesListStyled>
      {movies.map(({ id, title }) => {
        return (
          <li className="movie-item" key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className="movie-link"
            >
              {title}
            </Link>
          </li>
        );
      })}
    </MoviesListStyled>
  );
};

export default MoviesList;
