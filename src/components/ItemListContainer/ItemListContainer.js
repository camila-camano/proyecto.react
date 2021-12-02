import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "@firebase/firestore/lite";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "stock");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(productos);
        setItems(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</div>
  );
};
