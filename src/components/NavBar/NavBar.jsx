import { Link } from 'react-router-dom';
import App from '../../pages/App/App';

const NavBar = ({user}) => {
    return (
        <nav>
            <Link to="/">Movies List </Link>
            |
            <Link to="/actors"> Actors List </Link> 
            |           
            <p1> Username: {user}</p1>
        </nav>
    );
}

export default NavBar;