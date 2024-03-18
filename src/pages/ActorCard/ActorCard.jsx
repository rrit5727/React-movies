import { Link } from 'react-router-dom';
import ActorListPage from "../ActorListPage/ActorListPage"


const ActorCard = ({ actor, index }) => {
    
    
    return (
        <li>
            <Link to={`/actors`} >
                <span> {actor}  </span>
            </Link>
            &nbsp; {' '}
        </li>

    )

}

export default ActorCard