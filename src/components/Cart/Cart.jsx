import { useAppContext } from "../../context/context";
import "./Cart.css";
import { Link  } from "react-router-dom";

function Cart() {
  const { carrito, eliminarItem, limpiarCarrito } = useAppContext();
  return (
    <div className="cart-container">
      {carrito.length > 0 ? 
        <>
          {carrito.map(el =>{
          return(
            <div className="cart-items" key={el.id}>
              <p>{el.nombre}</p>
              <p>${el.precio}</p>
              <p>Cantidad {el.cantidad}</p>
              <p>Total {el.cantidad * el.precio}</p>
              <button onClick={() => eliminarItem(el.id)}>Eliminar Item</button>
            </div>
            )
          })}
          <p>Total: ${carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0 )}</p>
          <button onClick={() => limpiarCarrito()}>Limpiar carrito</button>
          <Link to="/checkout">
            <button>Finalizar Compra</button>
          </Link>
        </>
       : (
        <p> Carrito vacio</p>
      )}
    </div>
  );
}
export default Cart;
