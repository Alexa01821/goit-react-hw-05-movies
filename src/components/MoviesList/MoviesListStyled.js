import styled from 'styled-components';

const MoviesListStyled = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  .movie-item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    .movie-link {
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.02em;
      color: var(--color-grey);
    }
  }
`;

export default MoviesListStyled;
