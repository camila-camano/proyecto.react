import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar">
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
