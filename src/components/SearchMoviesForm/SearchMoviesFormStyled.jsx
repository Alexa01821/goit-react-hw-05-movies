import styled from 'styled-components';

const SearchMoviesFormStyled = styled.form`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  margin: 0 auto;
  .button {
    width: 120px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 20px;
    background-color: var(--color-ocean);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: var(--color-white);
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    &:hover,
    &:focus {
      background-color: var(--color-iris);
    }
  }
  
  .input {
    width: 100%;
    font-size: 20px;
    line-height: 1.5;
    margin: 0 auto;
    letter-spacing: 0.02em;
    background-color: transparent;
    border-radius: 20px;
  }
`;

export default SearchMoviesFormStyled;
