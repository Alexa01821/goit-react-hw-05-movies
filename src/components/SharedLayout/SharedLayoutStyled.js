import styled from 'styled-components';

const SharedLayoutStyled = styled.div`
  .header {
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding: 12px 24px;
    background-color: var(--color-cornflower);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    .nav-list {
      display: flex;
      gap: 60px;
      text-decoration: none;
      .nav-item {
        font-weight: 500;
        font-size: 24px;
        line-height: 2;
        letter-spacing: 0.02em;
        color: var(--color-navy-blue);

        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .nav-item:is(:hover, :active) {
        color: var(--color-ocean);
      }
    }
  }
  .main {
    max-width: 800px;
    margin: 28px auto;
    padding: 40px 20px;
    background-color: var(--color-modal);
    box-shadow: var(--box-shadow-card);
    .home-title {
      width: 300px;
      font-size: 36px;
      line-height: 1.11;
      text-align: center;
      text-transform: capitalize;
      letter-spacing: 0.02em;
      color: var(--color-navy-blue);
      margin: 0 auto 40px;
    }
  }
`;
export default SharedLayoutStyled;
