import { useState } from "react";
import "./CartWidget.css";
import CartIcon from "./cart_icon.png";

const CartWidget = () => {
    {/*const [counter, setCounter] = useState(0);
    const onClickHandler = () => {
        setCounter(counter + 1);
    } */}

    return (
        <div>
            <p className="cart_widget">CartWidget</p><img className="cart_icon"src={CartIcon} alt="Cart icon" />
            {/* <button onClick={onClickHandler}>Contar</button>{counter} */}
        </div>

    );
    
}

export default CartWidget;