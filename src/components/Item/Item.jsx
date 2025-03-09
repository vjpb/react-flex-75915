import "./Item.css";

function Item(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.nombre} />
      <h3>{props.nombre || "No Disponible"}</h3>
      <p>Precio:{props.precio || "Sin Precio"}</p>
      <button>Comprar</button>
      <p><span>Tag:</span>{props.categoria || "Sin Categoria"}</p>
    </div>
  );
}
export default Item;
