import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchCast } from 'services/API';
import MovieCastStyled from './MovieCastStyled';
import PlaceholderPerson from '../images/PlaceholderPerson.png';

const MovieCast = () => {
  const { movieId } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCastMovie = useCallback(async movieId => {
    setLoading(true);
    try {
      const castInfo = await fetchSearchCast(movieId);
      setCastMovie(castInfo);
    } catch (error) {
      Notify.failure(`Oops! ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCastMovie(movieId);
  }, [getCastMovie, movieId]);

  return (
    <MovieCastStyled>
      {loading && <Loader />}
      {castMovie && castMovie.length > 0 ? (
        <ul className="cast-list">
          {castMovie.map(({ id, name, character, profile_path }) => (
            <li className="cast-item" key={id}>
              <img
                className="cast-img"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : PlaceholderPerson
                }
                alt={name}
              />
              <div className="cast-info-container">
                <p className="cast-name">{name}</p>
                <p className="cast-character">
                  <span className="cast-character-span"> Character:</span>{' '}
                  {character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cast-name">There is no information yet.</p>
      )}
    </MovieCastStyled>
  );
};

export default MovieCast;
