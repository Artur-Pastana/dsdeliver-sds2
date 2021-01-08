
import './styles.css';
import { ReactComponent as Logo} from './delivery.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo className="logo" />
            <Link to="/" className="logo-text">Burger Magic</Link>
        </nav>
    )
}
export default Navbar;