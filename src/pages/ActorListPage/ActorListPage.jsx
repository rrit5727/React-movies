import App from "../App/App";
import ActorCard from "../ActorCard/ActorCard"

const ActorListPage = ({movies}) => {
    const allActors = movies.flatMap(movie => movie.cast);

    const uniqueActorsSet = new Set(allActors);

    const uniqueActorsArray = Array.from(uniqueActorsSet);
    
    const ActorListItems = uniqueActorsArray.map((actor, idx) => (
        <ActorCard actor={actor} key={idx} />
    ));
    
    return (        
        <>
            <h1>Actors List Page</h1>
            <ul>
                {ActorListItems}
            </ul>

        </>
    )
};

export default ActorListPage;