import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../Hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

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
    <div className="container m-4 item-detail-container">
      <div>
        <img src={item.image} alt={item.tile} className="item-detail-image" />
      </div>
      <div className="card">
        <div class="card-body card2">
          <h3 class="card-title">{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p className="card-subtitle mb-2 text-muted">
            Description: {item.description}
          </p>
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
              Go to cart
            </Link>
          )}
        </div>
        <button className="btn btn-primary" onClick={handleVolver}>
          Go back
        </button>
      </div>
    </div>
  );
};
