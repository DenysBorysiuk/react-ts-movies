import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "b60c32a6f6f2663f6a35c755ff35b4cc",
};

export const getTrendingMovies = async (
  signal: any,
  timePeriod: string,
  page: number
) => {
  const response = await axios.get(
    `/trending/movie/${timePeriod}?page=${page}`,
    {
      signal,
    }
  );
  return response.data;
};

export const getMovieDetails = async (movieId: string, signal: any) => {
  const response = await axios.get(`/movie/${movieId}`, {
    signal,
  });
  return response.data;
};

export const searchMovie = async (query: string, signal: any, page: number) => {
  const response = await axios.get(
    `/search/movie?query=${query}&page=${page}`,
    {
      signal,
    }
  );
  return response.data;
};

export const getMovieCredits = async (movieId: string, signal: any) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    signal,
  });
  return response.data;
};

export const getMovieReviews = async (movieId: string, signal: any) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    signal,
  });
  return response.data;
};
