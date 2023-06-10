import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c37b039199aa60ffa68be11b99365f95';

//====================== запит по тренду ========================================================================================
export const getTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  
    return data.results;
  };

//====================== пошук за словами ========================================================================================
  export const getMovieByQuery = async query => {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
  
    return data.results;
  };
  
  export const getMovieById = async movieId => {
    const { data } = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
  
    return data;
  };

  //====================== запит по акторам ========================================================================================
  export const getCastMovie = async movieId => {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
  
    return data.cast;
  };

  //====================== запит по відгукам ========================================================================================
  export const getReviewsMovie = async movieId => {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
  
    return data.results;
  };