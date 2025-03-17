import { useEffect, useState } from "react";
import Item from "../Item/item";
import "./ItemListContainer.css";
import { fetchData } from "../../fetchData";
import Loader from "../Loader/loader";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [todosLosProductos, setTodosLosProductos] = useState([]); // Este State sirve para guardar una copa del fetch y evitar hacer multiples peticiones del backend
  const [misProductos, setMisProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    if (todosLosProductos.length === 0) {
      fetchData()
        .then((response) => {
          setTodosLosProductos(response);
          if (categoria) {
            const productosFiltrados = response.filter(
              (el) => el.categoria === categoria
            );
            setMisProductos(productosFiltrados);
            setLoading(false);
          } else {
            setMisProductos(response);
            setLoading(false);
          }
        })
        .catch((err) => console.log(err + "Error "));
    }

    if (categoria) {
      const productosFiltrados = todosLosProductos.filter(
        (el) => el.categoria === categoria
      );
      setMisProductos(productosFiltrados);
    } else {
      setMisProductos(todosLosProductos);
    }
  }, [categoria]);

  return (
    <>
      <div className="container-cards">
        {loading ? (
           <div className="card-loading-container"><div className="card-loading"><Loader/></div></div> 
        ) : (
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
              />
            );
          })
        )}
      </div>
    </>
  );
}
export default ItemListContainer;
