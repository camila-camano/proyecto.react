import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirItem } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "stock");
    const docRef = doc(productosRef, itemId);

    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <h2>Cargando</h2> : <ItemDetail item={item} />}</div>;
};
