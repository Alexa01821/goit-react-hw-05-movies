import { useCallback, useEffect, useState } from 'react';
import { fetchHomePage } from 'services/API';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getMoviesList = useCallback(async () => {
    try {
      const trendMovie = await fetchHomePage();
      setTrendingMovies(trendMovie);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getMoviesList();
  }, [getMoviesList]);

  return (
    <>
      <h1 className="home-title">Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
