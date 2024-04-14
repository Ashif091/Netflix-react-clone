const key = import.meta.env.VITE_MOVIE_API_KEY
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&append_to_response=videos`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming`,
    videosRequest:'http://api.themoviedb.org/3/movie/897087/videos?'
  };
  export default requests
