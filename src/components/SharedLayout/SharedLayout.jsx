import { NavLink, Outlet } from 'react-router-dom';
import SharedLayoutStyled from './SharedLayoutStyled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <header className="header">
        <nav className="nav-list">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>    
    </SharedLayoutStyled>
  );
};
export default SharedLayout;
