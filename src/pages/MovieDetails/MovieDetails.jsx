import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchSearchDetail } from 'services/API';
import { MovieDetailsStyled } from './MovieDetailsStyled';
import { Notify } from 'notiflix';
import PlaceholderImage from '../../components/images/PlaceholderImage.png';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const numberId = Number(movieId);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const backLinkHref = location.state?.from ?? '/movies';
  const ref = useRef(backLinkHref);

  const getMovieDetails = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchSearchDetail(numberId);
      setMovieDetails(data);
    } catch (error) {
      Notify.failure(`Oops! ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [numberId]);

  useEffect(() => {
    numberId && getMovieDetails();
  }, [numberId, getMovieDetails]);

  return (
    <MovieDetailsStyled>
      <Link to={ref.current} className="link-back">
        Go back
      </Link>

      {loading && <Loader />}
    
      {movieDetails && (
        <div className="movieDetails">
          <img
            className="movieDetails-img"
            width="200px"
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : PlaceholderImage
            }
            alt={movieDetails.title}
          />
          <div className="movieDetails-tumb">
            <h1 className="tumb-title">
              {movieDetails.title}
              <p className="tumb-text">
                User Score: {Math.ceil(movieDetails.popularity / 10)}%
              </p>
            </h1>
            <h2 className="tumb-overview">
              Overview
              <p className="tumb-overview-text">{movieDetails.overview}</p>
            </h2>
            <h3 className="tumb-genres">
              Genres
              <ul className="genres-list">
                {movieDetails.genres.map(genre => (
                  <li className="genres-item" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </h3>
          </div>
        </div>
      )}
      <div className="information">
        <h3 className="information-title">Additional information</h3>
        <ul className="information-list">
          <li className="information-item">
            <NavLink to="cast" className="information-link">
              Cast
            </NavLink>
          </li>
          <li className="information-item">
            <Link to="reviews" className="information-link">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </MovieDetailsStyled>
  );
};

export default MovieDetails;
