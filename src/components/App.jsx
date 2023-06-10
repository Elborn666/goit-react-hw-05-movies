import { Link, Route, Routes } from "react-router-dom";
import Home from "page/Home/Home"
import Movies from "page/Movies/Movies"
import MoviesDetails from "page/MoviesDetails/MoviesDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews"
import css from './App.module.css'

export const App = () => {
  return (
    <header>
      <div className={css.container}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.list_item}>
              <Link to="/">Home</Link>
            </li>
            <li className={css.list_item}>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </header>
  );
};