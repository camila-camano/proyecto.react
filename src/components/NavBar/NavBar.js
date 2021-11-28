import { CartWidget } from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar">
      <h2>Titulo app</h2>
      <nav>
        <ul>
          <li>HOMBRE</li>
          <li>MUJER</li>
          <li>Enlace 3</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
