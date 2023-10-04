import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchReviews } from 'services/API';
import MovieReviewsStyled from './MovieReviewsStyled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCastMovie = useCallback(async movieId => {
    setLoading(true);
    try {
      const results = await fetchSearchReviews(movieId);
      setReviewsMovie(results);
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
    <MovieReviewsStyled>
      {loading && <Loader />}
      {reviewsMovie && reviewsMovie.length > 0 ? (
        <ul className="reviews-list">
          {reviewsMovie.map(({ id, author, content }) => (
            <li key={id} className="reviews-item">
              <h4 className="reviews-name">
                {author} <span className="reviews-name-span">Author</span>
              </h4>
              <p className="reviews-text">{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="reviews-name">
          We don't have ani reviews for this movie.
        </p>
      )}
    </MovieReviewsStyled>
  );
};

export default MovieReviews;
