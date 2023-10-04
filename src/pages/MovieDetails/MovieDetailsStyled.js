import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .link-back {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 8px 10px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &:hover {
      color: var(--color-white);
      background-color: var(--color-ocean);
      box-shadow: var(--box-shadow-btn);
    }
  }
  .movieDetails {
    display: flex;
    align-items: center;
    gap: 20px;
    .movieDetails-img {
      border: 1px solid var(--color-ocean);
      border-radius: 20px;
    }
    .movieDetails-tumb {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .tumb-title {
        font-size: 36px;
        line-height: 1.11;
        text-transform: capitalize;
        letter-spacing: 0.02em;
        color: var(--color-navy-blue);
        .tumb-text {
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.02em;
          color: var(--color-grey);
        }
      }
      .tumb-overview {
        font-size: 20px;
        line-height: 1.5;
        text-transform: capitalize;
        letter-spacing: 0.02em;
        color: var(--color-navy-blue);
        .tumb-overview-text {
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.02em;
          color: var(--color-grey);
        }
      }
      .tumb-genres {
        font-size: 20px;
        line-height: 1.5;
        text-transform: capitalize;
        letter-spacing: 0.02em;
        color: var(--color-navy-blue);
        .genres-list {
          list-style: none;
          display: flex;
          padding: 0;
          gap: 16px;
          .genres-item {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.02em;
            color: var(--color-grey);
          }
        }
      }
    }
  }
  .information {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border: 20px;
    box-shadow: var(--box-shadow-btn);
    .information-title {
      font-size: 20px;
      line-height: 1.5;
      text-transform: capitalize;
      letter-spacing: 0.02em;
      color: var(--color-navy-blue);
    }
    .information-list {
      display: flex;
      gap: 20px;
      .information-item {
        width: calc((100% - 20px) / 2);
        text-decoration: none;
        .information-link {
          width: 100%;
          display: inline-block;
          text-align: center;
          padding: 8px 10px;
          border-radius: 4px;
          text-decoration: none;
          color: var(--color-grey);
          font-weight: 500;
          border: 1px solid var(--color-grey);

          &:is(:hover, :focus, :active) {
            color: var(--color-white);
            background-color: var(--color-ocean);
            box-shadow: var(--box-shadow-btn);
          }
        }
      }
    }
  }
`;
