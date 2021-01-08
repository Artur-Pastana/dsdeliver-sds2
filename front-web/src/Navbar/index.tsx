
import './styles.css';
import { ReactComponent as Logo} from './delivery.svg';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo className="logo" />
            <a className="logo-text" href="home">DS Delivery</a>
        </nav>
    )
}
export default Navbar;