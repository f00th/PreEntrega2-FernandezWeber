import './NavBarContainer.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBarContainer = () => {
    return (
        <div className="NavBarContainer">
            <Link to="/">Home</Link>
            <Link to="/category/:id">Items</Link>
            <Link to="/item/:id">Item detail</Link>
            <hr></hr>
            <CartWidget />
        </div>
    );
}

export default NavBarContainer;