import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "@firebase/firestore/lite";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();
  console.log(categoryId);

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
        setItems(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? <Loader /> : <ItemList items={items} category={categoryId} />}
    </div>
  );
};
