import { useLocation, Link } from 'react-router-dom';
import css from "./FilmList.module.css"

const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title }) => (
        <li className={css.item} key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;