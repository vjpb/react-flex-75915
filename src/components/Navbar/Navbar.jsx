import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from "../../assets/Ritmil-vision-logo.png";

function Navbar() {
  return (
    <header className="nav-bar-container">
      <nav className="nav-bar">
        <img className="nav-bar-logo" src={logo} alt="logo" />
        <ul className="nav-bar-options">
          <li className="nav-bar-item">
            <Link to="/">Productos</Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/categoria/monturas">Monturas</Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/categoria/sol">Gafas de sol</Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/categoria/lentes">Lentes</Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Navbar;
