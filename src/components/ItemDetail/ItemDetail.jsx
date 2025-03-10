import "./ItemDetail.css";

function ItemDetail({item, usarFiltro}) {
    const {id, nombre, precio, img, categoria, stock, detalles, oferta} = item; 
  function agregarAlCarrito() {
    console.log("Haz agregado al carrito:", nombre)
  };


  return (
    <div className="card-detail">
      <img src={img} alt={nombre} />
      <article className="card-detail-content"> 
       {
        oferta && <h2>En Oferta!</h2> 
       }
        <h3>{nombre || "No Disponible"}</h3>
        <p>Precio: {precio || "Sin Precio"}</p>
        <p>Detalles: {detalles || "Sin información adicional"}</p>
        <p>Stock: {stock || "Sin Stock"}</p>
        <p>Categoria: {categoria || "Sin Categoria"}</p>
        <button disabled={stock === 0} className="card-btn" onClick={() => agregarAlCarrito()}>Comprar</button>
        <button disabled={!nombre} className="card-btn" onClick={() => usarFiltro("Todos")}>Volver</button>
      </article>
    </div>
  );
}
export default ItemDetail;
