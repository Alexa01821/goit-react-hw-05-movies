import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'af19ff54ef5b268cceaa8a1c567578e5';

const fetchHomePage = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.results;
};

const fetchSearchMovie = async ({ query, page }) => {
  const { data } = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      include_adult: false,
      page,
    },
  });
  return data;
};

const fetchSearchDetail = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};

const fetchSearchCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};

const fetchSearchReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results;
};

export {
  fetchHomePage,
  fetchSearchMovie,
  fetchSearchDetail,
  fetchSearchCast,
  fetchSearchReviews,
};
