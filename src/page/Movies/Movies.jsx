import css from './Movise.module.css'

const Movies = () => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzdiMDM5MTk5YWE2MGZmYTY4YmUxMWI5OTM2NWY5NSIsInN1YiI6IjY0ODQ2MDViZTM3NWMwMDBlMjRmMzcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBcczLWx8_WbmLgzi6Hbjia-fy2ltDJu3z-UM205P04'
        }
      };
      
      fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    return (
        <main>
            <div className={css.container}>
                <form className={css.form}>
                    <input
                        className={css.input}
                        // onChange={handleChange}
                        // value={searchQuery}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies">
                    </input>
                    <button type="submit" className={css.button}>Serach</button>
                </form>
            </div>
        </main>
    )
}

export default Movies;