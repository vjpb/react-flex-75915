import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="nav-bar-cart">
      <FaShoppingCart size={24} color="red" />
    </div>
  );
}
export default CartWidget;
