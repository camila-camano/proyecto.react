import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const CartView = () => {
  const { cart, vaciarCarrito, totalCompra, removerDelCarrito } =
    useContext(CartContext);

  // return si no hay elementos
  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  // return de la vista normal
  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />

      {cart.map((el) => (
        <div key={el.id}>
          <h3>{el.nombre}</h3>
          <p>Precio: ${el.precio}</p>
          <p>Cantidad: {el.cantidad}</p>
          <button
            className="btn btn-danger"
            onClick={() => removerDelCarrito(el.id)}
          >
            <BsFillTrashFill />
          </button>
        </div>
      ))}

      <hr />

      <h4>Total: ${totalCompra()}</h4>

      <button onClick={vaciarCarrito} className="btn btn-danger">
        Vaciar carrito
      </button>
      <Link to="/checkout" className="btn btn-success mx-3">
        Terminar mi compra
      </Link>
    </div>
  );
};
