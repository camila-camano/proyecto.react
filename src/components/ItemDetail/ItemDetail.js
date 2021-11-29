import React from "react";
import { useNavigate } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <div className="container m-5">
      <img src={item.image} alt={item.tile} />
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <p>{item.description}</p>
      <ItemCount />
      <button className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
    </div>
  );
};
