import styled from 'styled-components';

const MovieCastStyled = styled.div`
padding: 10px;
  .cast-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    .cast-item {
      width: calc((100% - 2 * 30) ÷3);
      display: flex;
      gap: 10px;
      border-radius: 20px;
      border: 1px solid var(--color-grey);
      padding: 10px;
      .cast-img {
        width: 100px;
        height: 150px;
        border-radius: 20px;
      }
      .cast-info-container {
        width: 80px;
        .cast-name {
          font-weight: 600;
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: 0.02em;
          color: var(--color-navy-blue);
        }
        .cast-character {
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: 0.02em;
          color: var(--color-grey);
          .cast-character-span {
            font-size: 12px;
            line-height: 1.5;
            letter-spacing: 0.02em;
            color: var(--color-navy-blue);
          }
        }
      }
      &:is(:hover, :focus, :active) {
        box-shadow: var(--box-shadow-btn);
      }
    }
  }
`;

export default MovieCastStyled;
