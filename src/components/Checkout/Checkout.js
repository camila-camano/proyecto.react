import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const generarOrden = () => {
    const order = {
      buyer: {
        name: "pepino",
        mail: "asdsd.com",
        phone: "011",
      },
      items: cart,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
      vaciarCarrito();
    });
  };

  return (
    <div>
      {orderId ? (
        <>
          <h2>Gracias por su compra!</h2>
          <p>Your order number is: {orderId}</p>
          <Link to="/" className="btn btn-primary">
            Homepage
          </Link>
        </>
      ) : (
        <>
          <h2>Checkout</h2>

          <button onClick={generarOrden}>Buy</button>
        </>
      )}
    </div>
  );
};
