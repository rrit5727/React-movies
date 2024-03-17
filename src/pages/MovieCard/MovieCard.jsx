import { Link } from 'react-router-dom';
import MoviesListPage from "../MoviesListPage/MoviesListPage";

const MovieCard = ({ movie, index }) => {
    return (
        <li>
            <Link to={`/movies/${movie.title}`} >
                <span> {movie.title} </span>
            </Link>
        </li>

    )

}

export default MovieCard