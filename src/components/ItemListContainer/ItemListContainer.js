import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { pedirDatos } from "../../helpers/pedirDatos";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        setItems(resp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</div>
  );
};
