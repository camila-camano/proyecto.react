import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        if (categoryId) {
          setItems(resp.filter((el) => el.category === categoryId));
        } else {
          setItems(resp);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</div>
  );
};
