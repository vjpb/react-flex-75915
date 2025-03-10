import { useEffect, useState } from "react";
import Item from "../Item/item";
import "./ItemListContainer.css";
import { fetchData } from "../../fetchData";
import Loader from "../Loader/loader";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer({ greetings }) {
  const [todosLosProductos, setTodosLosProductos] = useState([]);
  const [misProductos, setMisProductos] = useState([]);
  const [loading, setLoading] = useState([]);
  const [detalleFiltrado, setDetalleFiltrado] = useState(false);

  const usarFiltro = (filtro, id) => {
    switch (filtro) {
      case "Ninguno":
        setDetalleFiltrado(false)
        setMisProductos([]);
        break;
      case "Todos":
        setDetalleFiltrado(false)
        setMisProductos(todosLosProductos);
        break;
      case "Economicos":
        setDetalleFiltrado(false)
        setMisProductos(todosLosProductos.filter((el) => el.precio < 50));
        break;
      case "Costosos":
        setDetalleFiltrado(false)
        setMisProductos(todosLosProductos.filter((el) => el.precio > 50));
        break;
      case "Detalle":
        setDetalleFiltrado(true)
        setMisProductos(todosLosProductos.filter(el => el.id === id));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        setTodosLosProductos(response);
        setMisProductos(response);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="item-greetings">{greetings}</h1>
      {
        !detalleFiltrado &&
      <div className="container-filter">
        <button className="card-btn" onClick={() => usarFiltro("Todos")}>Todos</button>
        <button className="card-btn" onClick={() => usarFiltro("Economicos")}>Economicos</button>
        <button className="card-btn" onClick={() => usarFiltro("Costosos")}>Costosos</button>
        <button className="card-btn" onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
      </div>
      }
      <div className="container-cards">
        {loading ?  <Loader/>  : 
        detalleFiltrado ? <ItemDetail item={misProductos[0]}  usarFiltro={usarFiltro} /> :
        
          misProductos.map((el, index) => {
            return (
              <Item
                key={index}
                id={el.id}
                img={el.img}
                nombre={el.nombre}
                precio={el.precio}
                categoria={el.categoria}
                stock={el.stock}
                usarFiltro={usarFiltro}
              />
            );
          })
        }
      </div>
    </>
  );
}
export default ItemListContainer;
