import "./Item.css";

function Item({id, nombre, precio, img, categoria, stock, detalles, oferta, usarFiltro}) {
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
        <button disabled={!nombre} className="card-btn" onClick={() => usarFiltro("Detalle", id)}>Ver Detalles</button>
      </article>
    </div>
  );
}
export default Item;
