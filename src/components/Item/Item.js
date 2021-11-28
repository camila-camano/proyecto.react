import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2">
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <button>Ver más</button>
    </div>
  );
};
