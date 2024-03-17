import App from "../App/App";
import MovieCard from "../MovieCard/MovieCard"

const MoviesListPage = ({movies}) => {
    const MovieListItems = movies.map((m, idx) => <MovieCard movie={m} key={idx}/>)
    return (
            <>
                <h1>MoviesListPage</h1>
                <ul>
                    {MovieListItems}
                </ul>
            </>
    )
};

export default MoviesListPage;