import { Link } from 'react-router-dom';
import App from '../../pages/App/App';

const NavBar = ({user}) => {
    return (
        <nav>
            <Link to="/">Movies List </Link>
            |
            <Link to="/actors"> Actors List </Link> 
            |           
            <h2> Username: {user}</h2>
        </nav>
    );
}

export default NavBar;