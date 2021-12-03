import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
export const ItemCount = ({
  increment,
  decrement,
  onAdd,
  counter,
  minimo,
  maximo,
}) => {
  // const btnRestarConfig = {
  //     onClick: decrement,
  //     className: `btn ${counter === min ? "btn-outline-danger" : "btn-outline-primary"}`
  // }

  const btnStyles = {
    btnRestar: {
      onClick: decrement,
      className: `btn ${
        counter === minimo ? "btn-outline-danger" : "btn-outline-primary"
      }`,
    },
    btnSumar: {
      onClick: increment,
      className: counter === maximo ? "btn btn-danger" : "btn btn-primary",
    },
  };

  return (
    <div className="m-4">
      <button {...btnStyles.btnRestar}>-</button>

      <span className="mx-2">{counter}</span>

      <button {...btnStyles.btnSumar}>+</button>

      <div>
        <button
          className="btn btn-success my-2"
          disabled={counter === minimo}
          onClick={onAdd}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
