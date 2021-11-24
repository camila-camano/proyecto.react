import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar">
      <h2>Titulo app</h2>
      <nav>
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
