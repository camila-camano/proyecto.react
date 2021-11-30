import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.scss";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span>{totalCantidad()}</span>
    </div>
  );
};
