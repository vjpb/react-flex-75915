import { useEffect, useState } from "react";
import Item from "../Item/item";
import "./ItemListContainer.css";
import { fetchData } from "../../fetchData";

function ItemListContainer({ greetings }) {
  const [todosLosProductos, setTodosLosProductos] = useState([]);
  const [misProductos, setMisProductos] = useState([]);
  const [loading, setLoading] = useState([]);


  const usarFiltro = (filtro) => {
    switch (filtro) {
      case "Ninguno":
        setMisProductos([]);
        break;
      case "Todos":
        setMisProductos(todosLosProductos);
        break;
      case "Economicos":
        setMisProductos(todosLosProductos.filter((el) => el.precio < 50));
        break;
      case "Costosos":
        setMisProductos(todosLosProductos.filter((el) => el.precio > 50));
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    fetchData().then((response) => {
      setTodosLosProductos(response);
      setMisProductos(response);
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  return (
    <>
      <h1 className="item-greetings">{greetings}</h1>
      <div className="item-separator"></div>
      <div className="container-filter">
        <button onClick={() => usarFiltro("Todos")}>Todos</button>
        <button onClick={() => usarFiltro("Economicos")}>Economicos</button>
        <button onClick={() => usarFiltro("Costosos")}>Costosos</button>
        <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
      </div>
      <div className="container-cards">
        {
        loading ? <div className="loader"></div> :
        misProductos.map((el) => {
          return (
            <Item
              key={el.id}
              img={el.img}
              nombre={el.nombre}
              precio={el.precio}
              categoria={el.categoria}
            />
          );
        })}
      </div>
    </>
  );
}
export default ItemListContainer;
