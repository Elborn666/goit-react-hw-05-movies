import { useState ,useEffect } from "react";
import { getTrendingMovies } from "services/getMovies"
import FilmList from "components/FilmList/FilmList";

// import css from './Movise.module.css'
function Home () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies('').then(setMovies);
    },[])


    return (
        <div className="css.container">
            <FilmList movies={movies} />
        </div>
    )

}

export default Home;