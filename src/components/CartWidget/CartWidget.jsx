import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <p className="nav-bar-cart">
      <FaShoppingCart size={24} color="red" />
      (4)
    </p>
  );
}
export default CartWidget;
