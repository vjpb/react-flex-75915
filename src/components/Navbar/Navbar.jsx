import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/Ritmil-vision-logo.png'; // Ruta correcta de la imagen


function Navbar() {
    return (
        <header className='nav-bar-container'>
        <nav className="nav-bar">
            <img className="nav-bar-logo" src={logo} alt='logo'/>
            <ul className="nav-bar-options">
                <li className="nav-bar-item">Sales</li>
                <li className="nav-bar-item">Monturas</li>
                <li className="nav-bar-item">Gafas de sol</li>
                <li className="nav-bar-item">Accesorios</li>
                <li className="nav-bar-item">Nosotros</li>
                <li className="nav-bar-item">Contactos</li>
            </ul>
            <CartWidget />
        </nav>
    </header>
    );
};

export default Navbar;
