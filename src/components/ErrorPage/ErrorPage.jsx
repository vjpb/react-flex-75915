import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="content-wrapper system-container__aligment text-center">
      <div className="error-page">
        <h1 className="error-page_heading">404</h1>
        <h3>Pagina no encontrada</h3>
        <div className="error-page__line"></div>
        <p className="error-page__text">Upss... tenemos un error</p>
        <Link to="/">
          <button className="card-btn">Volver al Inicio</button>
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage;
