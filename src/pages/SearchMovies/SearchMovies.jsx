import React, { useCallback, useEffect, useRef, useState } from 'react';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchSearchMovie } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { Button } from 'components/Button/Button';
import SearchMoviesStyled from './SearchMoviesStyled';
import { useSearchParams } from 'react-router-dom';

const SearchMovies = () => {
  const [status, setStatus] = useState(false);
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [value, setValue] = useState();
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';
  const refQuery = useRef(query);
  const pageParams = searchParams.get('page') ?? '';
  const refPage = useRef(pageParams);

  const getMovieList = useCallback(
    async ({ query, page }) => {
      setStatus(true);
      try {
        const { results, total_pages } = await fetchSearchMovie({
          query,
          page,
        });
        setSearchParams({ search: query, page });
        setSearchMovieList(results);
        setShowBtn(page < total_pages);
      } catch (error) {
        Notify.failure(`Oops! ${error.message}`);
      } finally {
        setStatus(false);
      }
    },
    [setSearchParams]
  );

  const searchMovies = ({ query, page }) => {
    setValue(query);
    setPage(page);
    setSearchMovieList([]);
  };

  const getMoreMovie = ({ target: { textContent } }) => {
    if (textContent === 'Back' && page !== 0) {
      setPage(prePage => prePage - 1);
    } else if (textContent === 'Next' && showBtn) {
      setPage(prePage => prePage + 1);
    } else {
      Notify.failure(`Oops, something went wrong`);
    }
  };

  useEffect(() => {
    if (refQuery.current !== '') {
      getMovieList({ query: refQuery.current, page: refPage.current });
    }
    value && getMovieList({ query: value, page: page });
  }, [getMovieList, query, value, page]);

  return (
    <SearchMoviesStyled>
      <SearchMoviesForm searchMovies={searchMovies} />
      {searchMovieList && searchMovieList.length > 0 && (
        <>
          <MoviesList movies={searchMovieList} />
          <Button getMoreMovie={getMoreMovie} />
        </>
      )}
      {status && <Loader />}
    </SearchMoviesStyled>
  );
};

export default SearchMovies;
