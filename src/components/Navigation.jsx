import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Odkrywanie Książek
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Strona Główna
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/authors">
                  Autorzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/epochs">
                  Epoki
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audiobooks">
                  Audiobooki
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/genres">
                  Gatunki
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
