import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar">
      <h2>Titulo app</h2>
      <nav>
        <ul>
          <li>enlace 1</li>
          <li>enlace 2</li>
          <li>enlace 3</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
