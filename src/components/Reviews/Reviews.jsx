const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzdiMDM5MTk5YWE2MGZmYTY4YmUxMWI5OTM2NWY5NSIsInN1YiI6IjY0ODQ2MDViZTM3NWMwMDBlMjRmMzcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBcczLWx8_WbmLgzi6Hbjia-fy2ltDJu3z-UM205P04'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));