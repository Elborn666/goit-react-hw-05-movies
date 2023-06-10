import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import { BASE_POSTER_URL, PLACEHOLDER } from 'services/constants';
import css from './MoviesDetails.module.css'


const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <div className={css.back_link}>
        <Link to={backLinkHref}>
          Go back<span>.</span>
        </Link>
      </div>
      <div className={css.container}>
        <img className={css.img}
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt="get"
        />
        <div>
          <h2 className={css.title}>{movie.original_title}</h2>
          <h3 className={css.rating}>Rating: {Math.round(movie.vote_average)}</h3>
          <h4 className={css.overview}>Overview</h4>
          <p className={css.description}>{movie.overview}</p>
          <h5 className={css.genres}>Genres</h5>
          <div className={css.desc_style}>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </div>
        </div>
      </div>
      <div className={css.container}>
        <h6 className={css.title}>Additional information</h6>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;