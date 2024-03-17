import { useParams } from "react-router-dom"; 
import {movies} from "../../data.js"

const MovieDetailPage = () => {
    const { movieName } = useParams(); 

    const movie = movies.find(movie => movie.title === movieName);
    
    return (
        <div>
            <h1>Movie Detail Page</h1>
            {movie && (
                <>
                    <p>Movie Name: {movie.title}</p>
                    <p>Release Date: {movie.releaseDate}</p>
                    <p>Cast: {movie.cast.join(', ')}</p>
                    
                </>
            )}


        </div>
    )
};

export default MovieDetailPage;