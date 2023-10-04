import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import SearchMovies from 'pages/SearchMovies/SearchMovies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
// const Home = lazy(() => import('pages/Home/Home'));
// const SearchMovies = lazy(() => import('pages/SearchMovies/SearchMovies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const MovieCast = lazy(() => import('components/MovieCast/MovieCast'));
// const MovieReviews = lazy(() => import('components/MovieReviews/MovieReviews'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
