import { useState } from 'react';
import SearchMoviesFormStyled from './SearchMoviesFormStyled';
import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';

const SearchMoviesForm = ({ searchMovies }) => {
  const [, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const page = 1;

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.search.value;

    if (value === '') {
      Notify.failure('Fill in the form!');
      setSearchParams({});
    }
    setSearchParams({ search: value.toLowerCase().trim() });
    searchMovies({ query: value, page });
  };

  return (
    <SearchMoviesFormStyled onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        value={searchValue}
        placeholder="Search movies and cartoons"
        onChange={handleChange}
      />
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
    </SearchMoviesFormStyled>
  );
};

export default SearchMoviesForm;
