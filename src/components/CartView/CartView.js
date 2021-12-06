import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import "./CartView.scss";

export const CartView = () => {
  const { cart, vaciarCarrito, totalCompra, removerDelCarrito } =
    useContext(CartContext);

  // return si no hay elementos
  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>Your cart is empty!</h2>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  // return de la vista normal
  return (
    <div className="container my-5">
      <h2>Your cart:</h2>

      {cart.map((el) => (
        <div key={el.id} className="checkout-item">
          <div>
            <h3>{el.nombre}</h3>
            <p>Price: ${el.precio}</p>
            <p>Amount: {el.cantidad}</p>
          </div>

          <div className="btn-delete-item">
            <button
              className="btn btn-danger "
              onClick={() => removerDelCarrito(el.id)}
            >
              <BsFillTrashFill />
            </button>
          </div>
        </div>
      ))}

      <div className="finish">
        <h4>Total: ${totalCompra()}</h4>

        <button onClick={vaciarCarrito} className="btn btn-danger">
          Empty shopping cart
        </button>
        <Link to="/checkout" className="btn btn-success mx-3">
          Buy
        </Link>
      </div>
    </div>
  );
};
