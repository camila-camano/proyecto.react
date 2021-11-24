import React, { useState } from "react";

export const ItemCount = ({ stock = 50, initial = 0 }) => {
  const [cantidad, setCantidad] = useState(initial);

  const handleRestar = () => {
    cantidad > initial && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="contador">
      <button onClick={handleRestar} className="btn btn-dark">
        -
      </button>
      <p className="mx-2">{cantidad}</p>
      <button type="button" onClick={handleSumar} className="btn btn-dark">
        +
      </button>
    </div>
  );
};
