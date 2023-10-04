import { LoadMoreBtn } from './ButtonStyled';

export const Button = ({ getMoreMovie }) => {
  return (
    <LoadMoreBtn>
      <button className="button" onClick={getMoreMovie}>
        Back
      </button>
      <button className="button" onClick={getMoreMovie}>
        Next
      </button>
    </LoadMoreBtn>
  );
};
