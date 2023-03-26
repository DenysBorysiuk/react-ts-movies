import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'b60c32a6f6f2663f6a35c755ff35b4cc',
};

export const getTrendingMovies = async signal => {
  const response = await axios.get(`/trending/movie/day`, {
    signal,
  });
  return response.data;
};

export const getMovieDetails = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}`, {
    signal,
  });
  return response.data;
};

export const searchMovie = async (query, signal) => {
  const response = await axios.get(`/search/movie?query=${query}`, {
    signal,
  });
  return response.data;
};

export const getMovieCredits = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    signal,
  });
  return response.data;
};

export const getMovieReviews = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    signal,
  });
  return response.data;
};
