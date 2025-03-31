import { useState } from "react";
import "./Checkout.css";
import { useNavigate  } from "react-router-dom";

function Checkout() {

    const  navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });

  const modificarInput = (e) => {
    const {value, name} = e.target;
    setFormData({
        ...setFormData,
        [name]: value,
    });
  };

  const crearOrder = (e) => {
    e.preventDefault();
    console.log("Orden creada", formData);
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
    });
    setTimeout (() => {
        navigate('/');
    }, 1000);
  };
  return (
    <div className="checkout-container">
      <form onSubmit={crearOrder}>
        <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={modificarInput}/>
        <input type="text" placeholder="Correo" name="correo" value={formData.correo} onChange={modificarInput}/>
        <input type="text" placeholder="Telefono" name="telefono" value={formData.telefono} onChange={modificarInput}/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
export default Checkout;
