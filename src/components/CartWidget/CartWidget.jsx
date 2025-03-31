import { useAppContext } from "../../context/context";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartWidget() {
  const { carrito } = useAppContext();

  return (
    <Link to="/cart">
      <div className="nav-bar-cart">
        <span>
          <FaShoppingCart size={24} color="red" />({carrito.length})
        </span>
      </div>
    </Link>
  );
}
export default CartWidget;
