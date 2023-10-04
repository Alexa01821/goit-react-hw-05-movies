import styled from 'styled-components';

const MovieReviewsStyled = styled.div`
  padding: 10px;
  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .reviews-item {
      display: flex;
      gap: 20px;
      border-radius: 20px;
      border: 1px solid var(--color-grey);
      padding: 10px;

      .reviews-name {
        width: 180px;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 0.02em;
        color: var(--color-navy-blue);
        .reviews-name-span {
          display: block;
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: 0.02em;
          color: var(--color-grey);
        }
      }
      .reviews-text {
        width: 480px;
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.02em;
        color: var(--color-grey);
      }
      &:is(:hover, :focus, :active) {
        box-shadow: var(--box-shadow-btn);
      }
    }
  }
  .reviews-not {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: var(--color-navy-blue);
  }
`;

export default MovieReviewsStyled;
