import { Link } from "react-router-dom";
import "./Item.css";

function Item({id, nombre, precio, img, stock, detalles, oferta}) {

  function agregarAlCarrito() {
    console.log("Haz agregado al carrito:", nombre)
  };

  return (
    <div className="card">
      <img src={img} alt={nombre} />
      <article className="card-content">
        <h3>{nombre || "No Disponible"}</h3>
        <p>Precio: {precio || "Sin Precio"}</p>
        <button disabled={stock === 0} className="card-btn" onClick={() => agregarAlCarrito()}>Comprar</button>
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
