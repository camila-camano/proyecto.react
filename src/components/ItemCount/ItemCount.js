import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
export const ItemCount = ({
  increment,
  decrement,
  onAdd,
  counter,
  min,
  max,
}) => {
  // const btnRestarConfig = {
  //     onClick: decrement,
  //     className: `btn ${counter === min ? "btn-outline-danger" : "btn-outline-primary"}`
  // }

  const btnStyles = {
    btnRestar: {
      onClick: decrement,
      className: `btn ${
        counter === min ? "btn-outline-danger" : "btn-outline-primary"
      }`,
    },
    btnSumar: {
      onClick: increment,
      className: counter === max ? "btn btn-danger" : "btn btn-primary",
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
          disabled={counter === min}
          onClick={onAdd}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
