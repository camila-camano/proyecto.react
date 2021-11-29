import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";

export const ItemCount = ({ stock = 50, initial = 0 }) => {
  const { counter, increment, decrement } = useCounter(initial, stock, 0);

  return (
    <div className="contador">
      <button onClick={decrement} className="btn btn-dark">
        -
      </button>
      <p className="mx-2">{counter}</p>
      <button type="button" onClick={increment} className="btn btn-dark">
        +
      </button>
    </div>
  );
};
