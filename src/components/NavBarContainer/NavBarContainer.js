import './NavBarContainer.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBarContainer = () => {
    return (
        <div className="NavBarContainer">
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <Link to="/items/:id">Item detail</Link>
            <hr></hr>
            <CartWidget />
        </div>
    );
}

export default NavBarContainer;