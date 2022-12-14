import { Link } from "react-router-dom";
import Buscador from "./Buscador";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1>PragonTV</h1>
          </Link>
          <button
            className=" btn pb-3 navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/listado">
                  Listado
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/favoritos">
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>
          <Buscador />
        </div>
      </nav>
    </header>
  );
}
