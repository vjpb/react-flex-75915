import { Link } from "react-router-dom";
import "./Item.css";
import { useAppContext } from "../../context/context";

function Item({id, nombre, precio, img, stock, oferta}) {

  const { agregarAlCarrito } = useAppContext();

  return (
    <div className="card">
      <img src={img} alt={nombre} />
      <article className="card-content">
        <h3>{nombre || "No Disponible"}</h3>
        <p>Precio: {precio || "Sin Precio"}</p>
        <button disabled={stock === 0} className="card-btn" onClick={() => agregarAlCarrito({id, nombre, precio, img, cantidad: 1})}>Agregar al Carrito</button>
        <Link to={`/detalle/${id}`}>
          <button disabled={!nombre} className="card-btn">
            Ver Detalles
          </button>
        </Link>
      </article>
    </div>
  );
}
export default Item;
