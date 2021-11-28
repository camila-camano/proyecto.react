import React from "react";

export const ItemDetail = ({ item }) => {
  return (
    <div className="container m-5">
      <img src={item.image} alt={item.tile} />
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};
