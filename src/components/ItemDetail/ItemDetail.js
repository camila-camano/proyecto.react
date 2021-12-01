import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../Hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const { counter, increment, decrement } = useCounter(0, item.stock, 0);

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    counter > 0 &&
      agregarAlCarrito({
        id: item.id,
        precio: item.price,
        nombre: item.title,
        cantidad: counter,
      });
  };
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  return (
    <div className="container m-5">
      <img src={item.image} alt={item.tile} />
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <p>{item.description}</p>
      {!isInCart(item.id) ? (
        <ItemCount
          increment={increment}
          decrement={decrement}
          onAdd={handleAgregar}
          counter={counter}
          min={-1}
          max={item.stock}
        />
      ) : (
        <Link to="/cart" className="btn btn-secondary my-3">
          Terminar con mi compra
        </Link>
      )}
      <button className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
    </div>
  );
};
