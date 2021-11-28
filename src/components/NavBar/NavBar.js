import { CartWidget } from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h2>Titulo app</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/category/men">HOMBRE</Link>
          </li>
          <li>
            <Link to="/category/women">MUJER</Link>
          </li>
        </ul>
      </nav>
      <Link to="cart">
        <CartWidget />
      </Link>
    </header>
  );
};
