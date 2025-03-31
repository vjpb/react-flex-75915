import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../fetchData";
import Loader from "../Loader/loader";
import { useAppContext } from "../../context/context";
import Contador from "../Contador/Contador";

function ItemDetail({ item }) {

  const { id } = useParams();

  const [detalle, setDetalle] = useState (null);
  
  const { agregarAlCarrito, contador } = useAppContext();


  useEffect(() => {
      fetchData()
        .then((response) => {
          const detalleDelProducto = response.find(el => el.id === parseInt(id));
          setDetalle(detalleDelProducto);
        })
        .catch((err) => console.log(err + "Error "));
  }, [id]) 

  return (  
    !detalle ? <div className="card-loading-container"><div className="card-loading"><Loader/></div></div> 
        :
        <div className="card-detail">
          <img src={detalle.img} alt={detalle.nombre} />
          <article className="card-detail-content"> 
          {
            detalle.oferta && <h2>En Oferta!</h2> 
          }
            <h3>{detalle.nombre || "No Disponible"}</h3>
            <p>Precio: {detalle.precio || "Sin Precio"}</p>
            <p>Detalles: {detalle.detalles || "Sin información adicional"}</p>
            {
              detalle.stock > 0 ? 
              <>
                <p>Quedan {detalle.stock} unidades</p>
                <Contador stock={detalle.stock} />
              </>
              :
              <p>Sin existencias</p>
            }
            <p>Categoria: {detalle.categoria || "Sin Categoria"}</p>
            <button disabled={detalle.stock === 0} className="card-btn" onClick={() => agregarAlCarrito({id: detalle.id, nombre: detalle.nombre, precio: detalle.precio, img: detalle.img, stock: detalle.stock, cantidad: contador })}>Agregar al Carrito</button>
            <Link to="/">
              <button className="card-btn">
                Volver al inicio
              </button>
            </Link>
          </article>
        </div>
    );  
};

export default ItemDetail;
