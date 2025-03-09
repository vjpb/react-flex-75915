import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="nav-bar-cart">
      <FaShoppingCart size={24} color="red" />
      (4)
    </div>
  );
}
export default CartWidget;
