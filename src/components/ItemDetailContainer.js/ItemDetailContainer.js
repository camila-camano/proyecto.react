import React, { useEffect, useState } from "react";
import { pedirItem } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItem(1).then((resp) => setItem(resp));
  }, []);

  return <div>{item && <ItemDetail item={item} />} </div>;
};
