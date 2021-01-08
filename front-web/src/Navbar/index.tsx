
import './styles.css';
import { ReactComponent as Logo} from './delivery.svg';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo className="logo" />
            <a className="logo-text" href="home">Burger Magic</a>
        </nav>
    )
}
export default Navbar;